"use client";
import { motion } from "framer-motion";
import { Download, ExternalLink, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createPaymentOrder, verifyPayment } from "@/app/api/services";
import { showAlert } from "@/constants";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import {
  downloadBase64File,
  downloadPDF,
} from "@/utils/downloadFile/downloadFile";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// const notes = [
//   {
//     id: 1,
//     title: "C++ Programming Notes",
//     description:
//       "Comprehensive C++ programming notes covering basics to advanced topics including OOP, STL, memory management, and modern C++ features.",
//     image: "/assets/cpp.png",
//     price: "₹ 19.99",
//     tags: ["Data Structures", "Algorithms", "OOP", "STL"],
//     popular: true,
//   },
//   {
//     id: 2,
//     title: "Java Programming Notes",
//     description:
//       "Complete Java programming guide with examples covering core concepts, collections, multithreading, and enterprise Java development.",
//     image: "/assets/java.png",
//     price: "₹ 24.99",
//     tags: ["Spring Boot", "Collections", "Multithreading", "JVM"],
//     popular: false,
//   },
//   {
//     id: 3,
//     title: "Python Programming Notes",
//     description:
//       "Python notes for beginners and advanced developers covering data science, web development, automation, and machine learning applications.",
//     image: "/assets/python.jpg",
//     price: "₹ 29.99",
//     tags: ["Data Science", "Django", "Flask", "Machine Learning"],
//     popular: true,
//   },
//   {
//     id: 4,
//     title: "JavaScript & TypeScript Notes",
//     description:
//       "Modern JavaScript and TypeScript notes with practical examples for frontend and backend development using popular frameworks.",
//     image: "/assets/javascript.png",
//     price: "₹ 22.99",
//     tags: ["React", "Node.js", "Express", "TypeScript"],
//     popular: false,
//   },
//   {
//     id: 5,
//     title: "Data Structures & Algorithms",
//     description:
//       "Essential notes on data structures and algorithms with implementation examples in multiple languages and complexity analysis.",
//     image: "/assets/dsa.png",
//     price: "₹ 34.99",
//     tags: ["Arrays", "Linked Lists", "Trees", "Dynamic Programming"],
//     popular: true,
//   },
//   {
//     id: 6,
//     title: "Web Development Notes",
//     description:
//       "Full-stack web development notes covering HTML, CSS, JavaScript, backend technologies, databases, and deployment strategies.",
//     image: "/assets/webdev.jpg",
//     price: "₹ 27.99",
//     tags: ["HTML/CSS", "JavaScript", "Backend", "Databases"],
//     popular: false,
//   },
// ];

export default function NotesPage({ notes }) {
  const navigate = useRouter();
  const currentSession = useSession();

  const [loginData, setLoginData] = useState(null);
  useEffect(() => {
    if (currentSession.data) {
      setLoginData(currentSession.data);
    }
  }, [currentSession]);

  const processPayment = async ({ amount, notesId }) => {
    try {
      if (!loginData) {
        return navigate.push("/login?redirect=/notes");
      }
      const { data } = await createPaymentOrder({ amount });
      const option = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data?.order?.amout || parseFloat(amount) * 100,
        currency: data?.order?.currency || "INR",
        name: "Santosh Kumar",
        description: "For the notes",
        order_id: data?.order?.id,
        handler: async function (response) {
          const { data, error } = await verifyPayment({
            orderId: response?.razorpay_order_id,
            paymentId: response?.razorpay_payment_id,
            razorpaySignature: response?.razorpay_signature,
            notesId,
            userId: loginData.user.id,
          });
          if (error) {
            showAlert(error?.message || "Error verifying payment", "error");
          } else if (data && data?.success) {
            showAlert("Payment Success Downloading Notes !", "success");
            downloadNotes({ notesId });
          }
        },
        theme: {
          color: "#3399cc",
        },
      };
      const paymentObject = new window.Razorpay(option);
      paymentObject.open();
    } catch (error) {
      console.error("error happend", error);
    }
  };

  const downloadNotes = async ({ notesId }) => {
    try {
      const { data } = await axios.post("/api/notes", { notesId });
      if (data?.success) {
        downloadPDF(data?.notes?.downLoadLink, data?.notes?.title);
      }
    } catch (error) {
      console.error("error while downloading", error);
    }
  };
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Programming Notes
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              High-quality programming notes and study materials to help you
              master various programming languages and concepts.
            </p>
            <Button size="lg" className="group">
              <ShoppingCart className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Purchase All Notes Bundle
            </Button>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {notes.map((note) => (
              <motion.div key={note._id} variants={item}>
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-start gap-4 pb-2">
                    <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
                      <Image
                        width={100}
                        height={100}
                        src={note.thumbnail || "/placeholder.svg"}
                        alt={note.title}
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{note.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-bold text-primary">
                          ₹ {note.price}
                        </span>
                        {note.popular && (
                          <Badge
                            variant="secondary"
                            className="bg-accent text-accent-foreground"
                          >
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="py-4">
                    <CardDescription className="text-sm">
                      {note.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {note.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 mt-auto">
                    <div className="flex gap-3 w-full">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => {
                          processPayment({
                            amount: note.price,
                            notesId: note._id,
                          });
                        }}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
