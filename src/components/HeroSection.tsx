"use client";
import { cloneElement, FC } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import BentoBox from "@/components/bento-box";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type HeroSectionProps = {};

export const HeroSection: FC<HeroSectionProps> = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // const [size, setSize] = useState<
  //   Record<"innerWidth" | "innerHeight", number>
  // >({ innerHeight: 0, innerWidth: 0 });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //
  // useEffect(() => {
  //   const updateMousePosition = (e: MouseEvent) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };
  //
  //   window.addEventListener("mousemove", updateMousePosition);
  //   setSize({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
  //
  //   return () => {
  //     window.removeEventListener("mousemove", updateMousePosition);
  //   };
  // }, []);
  // const getMouseOffset = (x: number, y: number): { x: number; y: number } => {
  //   return {
  //     x: (x - size.innerWidth / 2) / 50,
  //     y: (y - size.innerHeight / 2) / 50,
  //   };
  // };
  //
  // const mouseOffset = getMouseOffset(mousePosition.x, mousePosition.y);
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-24 pb-12 px-4 md:px-6 overflow-hidden"
      id="/"
    >
      <motion.div
        style={{ opacity, y }}
        className="container max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 divide-y-4 divide-red-500">
          {/* Main Intro Box */}
          <BentoBox
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 p-6 md:p-8 flex flex-col justify-between"
            gradient="from-primary/20 to-background"
            // translateX={-mouseOffset.x * 1.2}
            // translateY={-mouseOffset.y * 1.2}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Available for work</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
              >
                Designer & <span className="text-primary">Developer</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-lg"
              >
                Full Stack Developer specializing in creating engaging,
                user-centered digital experiences with modern technologies
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <Button size="lg" asChild>
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </BentoBox>

          {/* Profile Image Box */}
          <BentoBox
            className="col-span-1 min-h-[250px] lg:col-span-2 row-span-2 overflow-hidden flex items-center justify-center relative"
            gradient="from-background to-primary/10"
            // translateX={mouseOffset.x * 1.5}
            // translateY={mouseOffset.y * 1.5}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full h-full overflow-hidden"
            >
              <Image
                src="/Dash.png"
                alt="Onkar Waghmode"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-xl font-bold text-white mb-1">
                  Onkar Waghmode
                </h2>
                <p className="text-white/80">Full Stack Web Developer</p>
              </div>
            </motion.div>
          </BentoBox>

          {/* Tech Stack Box */}
          <BentoBox
            className="col-span-1 row-span-1 p-5"
            border="border-primary/20 hover:border-primary/40"
            // translateX={mouseOffset.x}
            // translateY={mouseOffset.y}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="h-full flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-5 h-5 text-primary" />
                <h3 className="font-medium">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                  React
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                  Next.js
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                  Node.js
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                  Three.js
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                  WebRTC
                </span>
              </div>
            </motion.div>
          </BentoBox>

          {/* CTA Box */}
          <BentoBox
            className="min-h-[100px] col-span-1 md:col-span-2 lg:col-span-3 text-center flex flex-col items-center justify-center"
            gradient="from-primary/20 via-background to-background"
          >
            <motion.div
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-between w-full h-full"
            >
              {[
                { href: "https://github.com/Onkar58", icon: <Github /> },
                {
                  href: "https://linkedin.com/in/onkar58",
                  icon: <Linkedin />,
                },
                {
                  href: "https://twitter.com/_Onkar58",
                  icon: <Twitter />,
                },
                { href: "mailto:onkarwaghmode58@gmail.com", icon: <Mail /> },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="w-full h-full flex items-center justify-center transition-colors rounded-xl"
                >
                  <motion.div
                    whileHover={{
                      filter: "drop-shadow(0px 0px 8px rgba(0, 255, 255, 0.8))", // Glow effect
                    }}
                  >
                    {cloneElement(link.icon, { className: "w-6 h-6" })}
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </BentoBox>
        </div>
      </motion.div>

      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <p className="text-sm text-muted-foreground mb-2">
            Scroll to explore
          </p>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-2 h-2 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
