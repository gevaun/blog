"use client";

import { useRouter } from "next/navigation";  
import { motion } from "framer-motion";
import { MoveLeftIcon } from "lucide-react";

export default function Blog({ params }: { params: { blogId: string } }) {
  const router = useRouter();  // get router object

  return (
    <div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <h1 className="font-bold text-lg tracking-tight">Blog {params.blogId}</h1>
      </div>
    </motion.div>

    </div>
  );
}
