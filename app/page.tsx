"use client";

import BlogElements from "@/components/app/blogs";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <h1 className="font-bold text-lg tracking-tight">Featured Posts</h1>
        <div className="mt-4 space-y-4">
          <BlogElements />
        </div>
      </div>
    </motion.div>
  );
}
