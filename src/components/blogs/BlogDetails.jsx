"use client";
import React from "react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import parse from "html-react-parser";
import Link from "next/link";
import { formatDateTime } from "@/constants";
import Image from "next/image";
import Markdown from "react-markdown";

function BlogDetails({ blog }) {
  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog not found</h1>
        <Link
          href={"/"}
          className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Blog List
        </Link>
      </div>
    );
  }

  const goBack = () => {
    history.back();
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <button
        className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors mb-8"
        onClick={goBack}
      >
        <ArrowLeft size={20} />
        Back to Blog List
      </button>

      <article className="max-w-4xl mx-auto">
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            width={500}
            height={500}
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

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{formatDateTime(blog.createdAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>10 Minute</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

        <div className="prose prose-invert prose-emerald max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {blog.excerpt}
          </p>
          <div className="text-gray-300 text-lg leading-relaxed mb-6">
            <Markdown>{blog.description}</Markdown>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogDetails;
