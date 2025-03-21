"use client";
import { motion } from "framer-motion";

export default function GlitchLogo() {
  return (
    <motion.h1
      className="text-xl font-bold text-white uppercase font-mono relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      whileHover={{
        textShadow: [
          "2px 2px 10px white",
          "-2px -2px 10px gray",
          "3px 3px 15px white",
        ],
        x: [0, -1, 1, 0], // Subtle horizontal shake
        transition: { duration: 0.2, repeat: Infinity, repeatType: "reverse" },
      }}
    >
      &lt;onkar.<span className="text-gray-400">58</span> /&gt;
    </motion.h1>
  );
}
