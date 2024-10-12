"use client";

import Link from "next/link";
import { DotIcon } from "lucide-react";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Navigating the World of AI: A Beginner's Guide",
    excerpt:
      "Discover the fundamentals of artificial intelligence, from machine learning to neural networks.",
    date: "October 12, 2024",
    readTime: "10 min read",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["AI", "Machine Learning", "Neural Networks"],
  },
  {
    id: 2,
    title: "The Future of Work: Automation and the Workforce",
    excerpt:
      "Explore the impact of automation on jobs and industries, and discuss strategies for adapting to the changing workplace.",
    date: "October 10, 2024",
    readTime: "8 min read",
    category: "Business",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Automation", "Future of Work", "Job Market"],
  },
  {
    id: 3,
    title: "Ethical Considerations in AI Development",
    excerpt:
      "Examine the ethical implications of AI, including bias, privacy, and accountability.",
    date: "October 9, 2024",
    readTime: "12 min read",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["AI Ethics", "Bias", "Privacy"],
  },
  {
    id: 4,
    title: "The Rise of Renewable Energy: A Sustainable Future",
    excerpt:
      "Learn about the growing importance of renewable energy sources and their potential to combat climate change.",
    date: "October 8, 2024",
    readTime: "9 min read",
    category: "Environment",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Renewable Energy", "Climate Change", "Sustainability"],
  },
  {
    id: 5,
    title: "The Psychology of Color: How Colors Affect Our Emotions",
    excerpt:
      "Discover the science behind color psychology and how different colors can influence our mood and behavior.",
    date: "October 7, 2024",
    readTime: "7 min read",
    category: "Psychology",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Color Psychology", "Emotions", "Marketing"],
  },
  {
    id: 6,
    title: "The Power of Mindfulness: Techniques for Stress Reduction",
    excerpt:
      "Explore mindfulness meditation and other techniques to reduce stress and improve mental well-being.",
    date: "October 6, 2024",
    readTime: "11 min read",
    category: "Health and Wellness",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Mindfulness", "Stress Reduction", "Meditation"],
  },
  {
    id: 7,
    title:
      "The Art of Effective Communication: Tips for Building Strong Relationships",
    excerpt:
      "Learn essential communication skills to improve your relationships with others, both personally and professionally.",
    date: "October 5, 2024",
    readTime: "13 min read",
    category: "Personal Development",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Communication", "Relationships", "Interpersonal Skills"],
  },
  {
    id: 8,
    title:
      "The Future of Travel: Sustainable Tourism and Eco-Friendly Destinations",
    excerpt:
      "Discover the growing trend of sustainable tourism and explore eco-friendly travel destinations.",
    date: "October 4, 2024",
    readTime: "10 min read",
    category: "Travel",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Sustainable Tourism", "Eco-Friendly Travel", "Adventure"],
  },
  {
    id: 9,
    title: "The Importance of Diversity and Inclusion in the Workplace",
    excerpt:
      "Explore the benefits of a diverse and inclusive workplace and strategies for fostering a more equitable environment.",
    date: "October 3, 2024",
    readTime: "12 min read",
    category: "Business",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Diversity", "Inclusion", "Workplace Culture"],
  },
  {
    id: 10,
    title: "The Science of Happiness: Proven Strategies for a Fulfilling Life",
    excerpt:
      "Discover research-backed strategies to increase happiness and well-being.",
    date: "October 2, 2024",
    readTime: "8 min read",
    category: "Psychology",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Happiness", "Well-being", "Positive Psychology"],
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

export default function BlogList() {
  const blogList = blogs.map((post) => (
    <Link
      href={`blog/${post.id}`}
      className="opacity-85 hover:opacity-100 group"
    >
      <motion.li key={post.id} className="item" variants={item}>
        <div
          key={post.id}
          className="flex w-fit items-center gap-2 font-extralight group-hover:underline underline-offset-8 decoration-zinc-500 transition duration-500 ease-in-out"
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
