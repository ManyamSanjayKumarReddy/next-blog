import React from "react";
import SampleBlogs from "@/config/sampleBlogs";
import { Button, buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

interface BlogType {
  slug: string;
  title: string;
  content: string;
  imageUrl: string;
  description: string;
}
const BlogList = () => {
  return (
    <MaxWidthWrapper className="">
      <div className="px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Gen AI Blogs</h1>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {SampleBlogs.map((blog, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm mb-4">{blog.description}</p>

                <Link
                  href={`/blogpost/${blog.slug}`}
                  className={buttonVariants({ variant: "default" })}
                >
                  Click here
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default BlogList;
