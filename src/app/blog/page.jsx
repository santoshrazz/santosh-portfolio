export const dynamic = "force-dynamic";
import { fetchAllBlogs } from "@/app/api/services";
import AllBlog from "@/components/blogs/AllBlog";
import React from "react";

const page = async () => {
  const { data } = await fetchAllBlogs();
  return (
    <div>
      <AllBlog blogData={data} />
    </div>
  );
};

export default page;
