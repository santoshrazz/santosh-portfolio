import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDateTime } from "@/constants";
import { CalendarIcon, Clock, ArrowRight } from "lucide-react";
import parse from "html-react-parser";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development",
    description:
      "Exploring the latest trends and technologies shaping the future of web development.",
    date: "April 15, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Mastering TypeScript in 2024",
    description:
      "A comprehensive guide to TypeScript features and best practices for modern development.",
    date: "April 12, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Building Scalable React Applications",
    description:
      "Learn the architecture patterns and practices for building large-scale React apps.",
    date: "April 10, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "The Art of Clean Code",
    description:
      "Essential principles and practices for writing maintainable and efficient code.",
    date: "April 8, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600",
  },
];

export function LatestBlogs({ trendingBlogData }) {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
          <Link href={"/blog"}>
            <Button variant="ghost" className="group">
              Explore all blogs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingBlogData?.blog.map((blog) => (
            <Card
              key={blog._id}
              className="group hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader className="p-0">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    {/* {blog.date} */}
                    {formatDateTime(blog.createdAt)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {/* {blog.readTime} */}
                    {"10 Min"}
                  </div>
                </div>
                <CardTitle className="line-clamp-2 mb-2 hover:text-primary cursor-pointer">
                  <Link href={`/blog/${blog?._id}`}>{blog.title}</Link>
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {parse(blog.description)}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/blog/${blog._id}`}>
                  <Button variant="link" className="px-0 text-primary">
                    Read more
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
