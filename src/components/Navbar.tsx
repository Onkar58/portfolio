"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import Logo from "./Logo";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Projects", "Skills", "Experience", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-white"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="#/" className="text-xl font-bold">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((item, index) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium relative group"
              >
                {item}
                {/* Animated Underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Resume Button (Desktop) */}
        <Button
          size="sm"
          className="hidden md:flex rounded-lg shadow-md hover:shadow-white transition-all duration-300"
        >
          Resume <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-64 h-screen bg-black/90 backdrop-blur-lg p-6 flex flex-col items-start gap-6 md:hidden shadow-lg"
          >
            {/* Close Button */}
            <button
              className="self-end text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Mobile Navigation */}
            <nav className="flex flex-col items-start gap-4 text-white">
              {links.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
