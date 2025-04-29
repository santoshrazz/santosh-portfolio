"use client";

import { useState } from "react";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import toast from "react-hot-toast";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/contact", formData);
      if (!data) {
        return toast.error("Some Error Occured");
      }
      return toast.success(
        data?.message || "Your response Submitted SuccessFully"
      );
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Error Submitting your request"
      );
    } finally {
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
    }
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      id="contact"
    >
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <p className="text-muted-foreground mb-12">Let's get in touch!</p>

      <div className="grid lg:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <Input
                  type="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Connect with me</CardTitle>
            <CardDescription>
              You can also reach out to me on these platforms.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full" asChild>
              <a href="mailto:santoshrajbgp11@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                santoshrajbgp11@gmail.com
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://www.facebook.com/profile.php?id=100064916148016"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://www.instagram.com/__raj_yadav_6204/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://github.com/santoshrazz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://linkedin.com/in/santoshrazz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
