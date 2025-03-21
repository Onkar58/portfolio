"use client";
import { IconType } from "react-icons";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: {
    name: string;
    Icon: IconType;
    category: string;
  };
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "backend":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "3d":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "media":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className={cn(
        "px-3 py-1.5 rounded-full font-medium text-xs flex items-center gap-2",
        getCategoryColor(skill.category),
      )}
    >
      <span className="relative w-3 h-3">{<skill.Icon />}</span>
      {skill.name}
    </motion.div>
  );
}
