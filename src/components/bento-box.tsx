"use client";

import type React from "react";

import type { ReactNode } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoBoxProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  gradient?: string;
  border?: string;
  translateX?: number;
  translateY?: number;
  delay?: number;
}

export default function BentoBox({
  children,
  className,
  gradient,
  border,
  translateX = 0,
  translateY = 0,
  delay = 0,
  ...props
}: BentoBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        translateX,
        translateY,
        transition: "transform 0.3s ease-out",
      }}
      className={cn(
        "rounded-xl overflow-hidden",
        gradient ? `bg-gradient-to-br ${gradient}` : "bg-background",
        border || "border border-muted",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
