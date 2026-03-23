"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Award,
  Users,
  Mail,
  ExternalLink,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import BentoBox from "@/components/bento-box";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface FreelanceProject {
  id: number;
  title: string;
  role: string;
  outcome: string;
  impact: string;
  icon: React.ReactNode;
  gradient: string;
  accentColor: string;
  image: string;
  liveLink: string;
  codeLink: string;
}

interface ClientBadge {
  category: string;
  companies: number;
}

export function Freelancing() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: FreelanceProject[] = [
    {
      id: 1,
      title: "Danalitic AI",
      role: "Design + Frontend",
      outcome: "",
      impact: "",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "#0ea5e9",
      image: "/danalitic.png",
      liveLink: "https://www.danalitic.in/",
      codeLink: "https://github.com/Onkar58/danalitic",
    },
    {
      id: 2,
      title: "Expius Infotech",
      role: "Full Stack Development",
      outcome: "",
      impact: "Shipped in 4 weeks",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "#a855f7",
      image: "/expius.png",
      liveLink: "https://expiusinfotech.com/",
      codeLink: "https://github.com/Onkar58/expius-infotech",
    },
    {
      id: 3,
      title: "Coming Soon",
      role: "Full Stack Development",
      outcome: "",
      impact: "",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-green-500/20 to-emerald-500/20",
      accentColor: "#10b981",
      image: "/coming-soon.webp",
      liveLink: "",
      codeLink: "",
    },
  ];

  const clientBadges: ClientBadge[] = [
    { category: "SaaS", companies: 2 },
    { category: "Educational", companies: 1 },
    { category: "Management", companies: 1 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="freelance" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Zap className="w-3.5 h-3.5" />
            <span>Selected Freelance Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Helping teams{" "}
            <span className="text-primary">design, ship & scale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Partnering with startups and established companies across fintech,
            SaaS, and creator economy to deliver high-impact digital products.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16"
        >
          {/* Main Hero Tile - Large */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2"
          >
            <BentoBox
              className="h-full p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
              gradient="from-primary/10 via-background to-background"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                  Impact-Driven
                </div>
                <h3 className="text-3xl font-bold mb-3">
                  Design + Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full-stack solutions tailored to your vision. From concept to
                  launch, I partner with you to create products that users love.
                </p>
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-primary font-medium relative z-10"
              >
                <span>View case studies</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </BentoBox>
          </motion.div>

          {/* Project Card 1 - Medium */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
            onHoverStart={() => setHoveredProject(1)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <BentoBox
              className="h-full p-0 relative overflow-hidden group cursor-pointer"
              gradient={`${projects[0].gradient} to-background`}
            >
              {/* Background Image */}
              <div className="group relative h-full overflow-hidden rounded-xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={projects[0].image}
                    alt={projects[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t 
                        from-black/90 via-black/70 to-transparent 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                  <div
                    className="flex flex-col gap-2 transform translate-y-6 opacity-0 
        group-hover:translate-y-0 group-hover:opacity-100 
        transition-all duration-300"
                  >
                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-lg bg-blue-500/20 
        flex items-center justify-center mb-2 text-blue-400"
                    >
                      {projects[0].icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white">
                      {projects[0].title}
                    </h3>

                    {/* Role */}
                    <p className="text-xs text-gray-300 mb-2">
                      {projects[0].role}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-2 mt-2">
                      <a
                        href={projects[0].liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 
          text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </a>

                      <a
                        href={projects[0].codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 
          text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </BentoBox>
          </motion.div>

          {/* Credibility Tile */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2"
          >
            <BentoBox
              className="h-full p-6 flex flex-col justify-between"
              gradient="from-accent/10 to-background"
            >
              <div>
                <Award className="w-8 h-8 text-white mb-4" />
                <h3 className="text-sm font-semibold mb-4">Worked with</h3>
              </div>

              <div className="space-y-3">
                {clientBadges.map((badge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-xs font-medium text-foreground">
                      {badge.category}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {badge.companies} companies
                    </div>
                  </motion.div>
                ))}
              </div>
            </BentoBox>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
            onHoverStart={() => setHoveredProject(2)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <BentoBox
              className="h-full p-0 relative overflow-hidden group cursor-pointer"
              gradient={`${projects[1].gradient} to-background`}
            >
              {/* Background Image */}
              <div className="group relative h-full overflow-hidden rounded-xl">
                {/* Background */}
                <div className="absolute inset-0">
                  <Image
                    src={projects[1].image}
                    alt={projects[1].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t 
      from-black/90 via-black/70 to-transparent 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-300"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                  {/* Top Content */}
                  <div
                    className="transform translate-y-4 opacity-0 
      group-hover:translate-y-0 group-hover:opacity-100 
      transition-all duration-300"
                  >
                    <div
                      className="w-10 h-10 rounded-lg bg-purple-500/20 
        flex items-center justify-center mb-4 text-purple-400"
                    >
                      {projects[1].icon}
                    </div>

                    <h3 className="text-lg font-semibold mb-1 text-white">
                      {projects[1].title}
                    </h3>

                    <p className="text-xs text-gray-300 mb-4">
                      {projects[1].role}
                    </p>
                  </div>

                  {/* Bottom Content */}
                  <div
                    className="space-y-4 transform translate-y-6 opacity-0 
      group-hover:translate-y-0 group-hover:opacity-100 
      transition-all duration-300 delay-100"
                  >
                    {/* Outcome + Impact */}
                    <div className="text-white">
                      <p className="text-sm font-medium mb-1">
                        {projects[1].outcome}
                      </p>
                      <p className="text-xs text-gray-300">
                        {projects[1].impact}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={projects[1].liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 
          text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </a>

                      <a
                        href={projects[1].codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 
          text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </BentoBox>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
            onHoverStart={() => setHoveredProject(3)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <BentoBox
              className="h-full p-0 relative overflow-hidden group cursor-pointer"
              gradient={`${projects[2].gradient} to-background`}
            >
              {/* Background Image */}
              <div className="group relative h-full overflow-hidden rounded-xl">
                {/* Background */}
                <div className="absolute inset-0">
                  <Image
                    src={projects[2].image}
                    alt={projects[2].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t 
      from-black/90 via-black/70 to-transparent 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-300"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                  {/* Top Section */}
                  <div
                    className="transform translate-y-4 opacity-0 
      group-hover:translate-y-0 group-hover:opacity-100 
      transition-all duration-300"
                  >
                    <div
                      className="w-10 h-10 rounded-lg bg-green-500/20 
        flex items-center justify-center mb-4 text-green-400"
                    >
                      {projects[2].icon}
                    </div>

                    <h3 className="text-lg font-semibold mb-1 text-white">
                      {projects[2].title}
                    </h3>

                    <p className="text-xs text-gray-300 mb-4">
                      {projects[2].role}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div
                    className="space-y-4 transform translate-y-6 opacity-0 
      group-hover:translate-y-0 group-hover:opacity-100 
      transition-all duration-300 delay-100"
                  >
                    {/* Outcome + Impact */}
                    <div className="text-white">
                      <p className="text-sm font-medium mb-1">
                        {projects[2].outcome}
                      </p>
                      <p className="text-xs text-gray-300">
                        {projects[2].impact}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={projects[2].liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 
          text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </a>

                      <a
                        href={projects[2].codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 
          text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </BentoBox>
          </motion.div>

          {/* CTA Tile */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
          >
            <BentoBox
              className="h-full p-6 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
              gradient="from-primary/5 to-background"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <Mail className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Let's work together</h3>
                  <p className="text-sm text-muted-foreground">
                    Available for select freelance projects
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 mt-4"
                >
                  <Button className="w-full" size="sm">
                    Get in touch
                  </Button>
                </motion.div>
              </div>
            </BentoBox>
          </motion.div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to bring your ideas to life?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm passionate about creating products that make an impact. Let's
            discuss your next project.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <a href="mailto:onkarwaghmode58@gmail.com">
              Start a conversation <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
