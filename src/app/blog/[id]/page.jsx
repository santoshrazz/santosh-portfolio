import { fetchSingleBlog } from "@/app/api/services";
import BlogDetails from "@/components/blogs/BlogDetails";
import React from "react";

const page = async ({ params }) => {
  await params;
  const { id } = await params;
  const { data, error } = await fetchSingleBlog({ blogId: id });
  return (
    <div>
      <BlogDetails blog={data.blog} />
    </div>
  );
};

export default page;
