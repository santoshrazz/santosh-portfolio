import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { formatDateTime } from "@/constants";
import Link from "next/link";
const AllBlog = ({ blogData }) => {
  return (
    <div className="text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-gray-400 text-xl max-w-2xl">
          Exploring web development, design patterns, and modern technologies
          through detailed articles and tutorials.
        </p>
      </header>

      {/* Blog Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData?.blogs?.map((blog) => (
            <article
              key={blog._id}
              className="bg-zinc-900 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{formatDateTime(blog.createdAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{10} Minute Read</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 line-clamp-2">
                  {blog.title}
                </h2>
                <div
                  className="text-gray-400 mb-6 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                ></div>
                <Link href={`/blog/${blog._id}`}>
                  <button className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllBlog;
