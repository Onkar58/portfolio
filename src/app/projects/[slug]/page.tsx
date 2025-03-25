import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Code,
  Award,
  Lightbulb,
  Layers,
} from "lucide-react";
import projects from "@/data/projects.json";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type Testimonial = {
  quote: string;
  author: string;
  company: string;
};

type Project = {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  completedDate: string;
  role: string;
  keyFeatures?: string[];
  challenges?: string[];
  testimonial?: Testimonial;
};

const getProjectData = (slug: string) => {
  return projects[slug as keyof typeof projects] as Project;
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug);

  if (!project) {
    return (
      <div className="container max-w-4xl py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <p className="mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="container max-w-5xl py-12">
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      <div className="rounded-lg overflow-hidden border mb-8">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="w-full object-cover"
        />
      </div>

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}

            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project?.longDescription && (
            <Card className="lg:col-span-2 row-span-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Layers className="mr-2 h-5 w-5" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none dark:prose-invert opacity-50">
                  {project?.longDescription
                    .split("\n\n")
                    .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
              </CardContent>
            </Card>
          )}
          <Card className="row-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Project Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-2 flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Role
                </h3>
                <p className="opacity-50">{project.role}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2 flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Completed
                </h3>
                <p className="opacity-50">{project.completedDate}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {project?.keyFeatures && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 opacity-50">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
          {project?.challenges && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Challenges & Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 opacity-50">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Testimonial - Wide Tile */}
          {project?.testimonial && (
            <Card className="lg:col-span-3">
              <CardContent className="pt-6">
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "{project.testimonial.quote}"
                  <footer className="mt-2 text-sm text-muted-foreground">
                    <strong>{project.testimonial.author}</strong>,{" "}
                    {project.testimonial.company}
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
