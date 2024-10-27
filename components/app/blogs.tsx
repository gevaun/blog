"use client";

import Link from "next/link";
import { DotIcon } from "lucide-react";
import { motion } from "framer-motion";

import { fetchBlogData } from "@/app/utils/utils";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 0.5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface BlogListProps {
  blogs: Array<{
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    tags: string[];
  }>;
}

export default function BlogList({blogs}: BlogListProps) {
  const blogList = blogs.map((post) => (
    <Link
      key={post.id}
      href={`blog/${post.id}`}
      className="opacity-85 hover:opacity-100 group"
    >
      <motion.li key={post.id} className="item" variants={item}>
        <div
          key={post.id}
          className="flex w-fit items-center gap-2 font-extralight transition-all duration-300 ease-in-out group-hover:underline underline-offset-8 decoration-zinc-500"
        >
          <span>{post.date}</span>
          <span>{post.title}</span>
          <DotIcon className="w-3 h-3 transition-all duration-500 opacity-0 group-hover:opacity-75 group-hover:animate-ping" />
        </div>
      </motion.li>
    </Link>
  ));

  return (
    <motion.ul
      className="container grid gap-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {blogList}
    </motion.ul>
  );
}
