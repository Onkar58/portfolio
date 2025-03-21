import { FC } from "react";
import ProjectBento from "./project-bento";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

export type ProjectsProps = {};

const projects = [
  {
    id: 1,
    title: "LitGit",
    category: "Education Platform",
    description:
      "A platform for teachers to analyze student activities and data on LeetCode",
    tech: ["MERN Stack", "Firebase", "Analytics"],
    image: "/litgit.png",
    color: "#6366f1",
    span: { desktop: "col-span-1 row-span-1", mobile: "col-span-1" },
  },
  {
    id: 2,
    title: "AnimHub",
    category: "Creative Tool",
    description:
      "An online code editor website that allows users to create animations using HTML, CSS, and JavaScript",
    tech: ["MERN Stack", "Firebase", "Code Editor"],
    image: "/animhub.png",
    color: "#f59e0b",
    span: { desktop: "col-span-1 row-span-2", mobile: "col-span-1" },
  },
  {
    id: 3,
    title: "Video Calling App",
    category: "Communication Tool",
    description:
      "A video calling app that uses WebRTC to establish a realtime communication channel between 2 peers",
    tech: ["WebRTC", "React", "Socket.io"],
    image: "/webrtc.png",
    color: "#10b981",
    span: { desktop: "col-span-1 row-span-1", mobile: "col-span-1" },
  },
  {
    id: 4,
    title: "Predator",
    category: "Web Application",
    description: "Official Web Application for the DYPCO Three JS",
    tech: ["React", "Three.js", "Animation"],
    image: "/predators.png",
    color: "#ef4444",
    span: { desktop: "col-span-2 row-span-1", mobile: "col-span-1" },
  },
];

export const Projects: FC<ProjectsProps> = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative endeavors
          </p>
        </div>

        {/* Project Bento Grid */}
        <ProjectBento projects={projects} />

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://github.com/onkarwaghmode"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub <Github className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
