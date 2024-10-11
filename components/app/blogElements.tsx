import Image from "next/image";
import Link from "next/link";
import { StickyNoteIcon, MoveUpRightIcon } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Coding: A Journey Through Time",
    excerpt:
      "Explore the evolution of coding from its early days to the present, and get a glimpse into the future of programming.",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Programming",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["JavaScript", "Python", "C++"],
  },
  {
    id: 2,
    title: "Machine Learning: Demystifying AI",
    excerpt:
      "Dive into the world of machine learning and understand the basics of how AI systems learn and make decisions.",
    date: "May 10, 2023",
    readTime: "7 min read",
    category: "Artificial Intelligence",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Machine Learning", "Deep Learning", "Neural Networks"],
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt:
      "Discover the latest trends and technologies shaping the future of web development, from serverless to edge computing.",
    date: "May 5, 2023",
    readTime: "6 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "GraphQL"],
  },
];

const categories = [
  "Programming",
  "Artificial Intelligence",
  "Web Development",
  "Data Science",
  "Cybersecurity",
];

const tags = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "Machine Learning",
  "DevOps",
  "Cloud Computing",
];

export default function BlogList() {
  const blogList = blogPosts.map((post) => (
    <Link href={`blog/${post.id}`} className="opacity-75 hover:opacity-100 group">
      <div key={post.id} className="flex items-center gap-2">
        <StickyNoteIcon className="w-3 h-3" />
        {post.title}
        {post.date}
        <MoveUpRightIcon className="w-3 h-3 transition-all duration-200 group-hover:rotate-45 opacity-50 group-hover:opacity-75" />
      </div>
    </Link>
  ));

  return <div className="gap-6 grid">{blogList}</div>;
}
