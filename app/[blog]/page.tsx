"use client";

import { motion } from "framer-motion";

export default function Blog({ params }: { params: { blogId: string } }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <h1 className="font-bold text-lg tracking-tight">Blog</h1>
        {params.blogId}
      </div>
    </motion.div>
  );
}
