"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import BentoBox from "@/components/bento-box"
import { useMobile } from "@/hooks/use-mobile"

interface Project {
  id: number
  title: string
  category: string
  description: string
  tech: string[]
  image: string
  color: string
  span: {
    desktop: string
    mobile: string
  }
}

interface ProjectBentoProps {
  projects: Project[]
}

export default function ProjectBento({ projects }: ProjectBentoProps) {
  const isMobile = useMobile()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
      {projects.map((project, index) => (
        <BentoBox
          key={project.id}
          className={`${isMobile ? project.span.mobile : project.span.desktop} group overflow-hidden p-0`}
          border={`border-muted hover:border-[${project.color}]/40`}
          delay={index * 0.1}
        >
          <div
            className="relative h-full flex flex-col"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              <div className="absolute top-4 left-4">
                <Badge
                  variant="outline"
                  className="bg-background/80 backdrop-blur-sm"
                  style={{ borderColor: project.color, color: project.color }}
                >
                  {project.category}
                </Badge>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="h-10 w-10 rounded-full absolute top-4 right-4 flex items-center justify-center"
                style={{ backgroundColor: project.color }}
              >
                <ArrowUpRight className="h-5 w-5 text-white" />
              </motion.div>
            </div>

            <div className="flex-1 p-5">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech, index) => (
                  <span key={index} className="text-xs px-2 py-1 rounded-full bg-muted/70">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-muted/70">+{project.tech.length - 3} more</span>
                )}
              </div>

              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href={`/projects/${project.id}`}>View Details</Link>
                </Button>
              </div>
            </div>

            <Link href={`/projects/${project.id}`} className="absolute inset-0">
              <span className="sr-only">View {project.title} details</span>
            </Link>
          </div>
        </BentoBox>
      ))}

      {/* Call to action box */}
      <BentoBox
        className="col-span-1 md:col-span-1 row-span-1 flex flex-col justify-center items-center p-6 text-center"
        gradient="from-background to-primary/5"
        delay={projects.length * 0.1}
      >
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Github className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-bold text-lg mb-2">More Projects</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Explore all my open-source projects and contributions on GitHub
        </p>
        <Button variant="outline" size="sm" asChild>
          <Link
            href="https://github.com/onkarwaghmode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            View GitHub <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </BentoBox>
    </div>
  )
}

