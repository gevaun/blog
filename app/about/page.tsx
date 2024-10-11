"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <h1>About</h1>
        <p>This is the about page.</p>
      </div>
    </motion.div>
  );
}
