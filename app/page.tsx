"use client";

import BlogElements from "@/components/app/blogs";
import { motion } from "framer-motion";
import { fetchBlogData } from "./utils/utils";

export default function Home() {
  const blogs = fetchBlogData();

  return (
    <div>
      <div className="mb-4">
        <h1 className="font-bold text-lg tracking-tight">Featured Posts</h1>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div>
          <div className="mt-4 space-y-4">
            <BlogElements blogs={blogs} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
