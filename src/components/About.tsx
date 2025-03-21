import { FC } from "react";
import BentoBox from "./bento-box";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export type AboutProps = {};

export const About: FC<AboutProps> = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background and skills as a developer and
            designer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <BentoBox
            className="col-span-1 md:col-span-2 row-span-1 p-6"
            gradient="from-background to-primary/5"
          >
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-4 text-base text-muted-foreground">
              <p>
                Hey there! I'm Onkar, a Full Stack Web Developer with a passion
                for creating beautiful, functional, and user-centered digital
                experiences.
              </p>
              <p>
                With a background in Engineering and experience as a Web Lead at
                Google Developer Student Clubs, I've developed a strong
                foundation in both frontend and backend technologies.
              </p>
              <p>
                I enjoy tackling complex problems and transforming ideas into
                reality through clean code and thoughtful design. When I'm not
                coding, you can find me exploring new technologies, contributing
                to open-source projects, or sketching UI designs.
              </p>
            </div>
          </BentoBox>

          <BentoBox
            className="col-span-1 md:col-span-1 row-span-1 p-6 flex flex-col justify-between"
            gradient="from-primary/5 to-background"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Exploring 3D web experiences with Three.js
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Building modern UI components with React and Tailwind
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Learning advanced animation techniques
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <Button size="sm" className="mt-4" asChild>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </BentoBox>

          <BentoBox
            className="col-span-1 md:col-span-2 row-span-1 p-0 overflow-hidden"
            border="border-muted"
          >
            <div className="relative w-full h-full min-h-[200px]">
              <Image
                src="/onkar58.png"
                alt="Working on projects"
                fill
                className="object-cover"
                loading="eager"
              />
            </div>
          </BentoBox>

          <BentoBox
            className="col-span-1 md:col-span-1 row-span-1 p-6"
            gradient="from-background via-background to-primary/10"
          >
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">B.E. in Computer Engineering</p>
                <p className="text-sm text-muted-foreground">
                  4th Year Engineering Student
                </p>
                <p className="text-sm text-muted-foreground">2021 - 2025</p>
              </div>
              <div>
                <p className="font-medium">Google Developer Student Clubs</p>
                <p className="text-sm text-muted-foreground">Web Lead</p>
                <p className="text-sm text-muted-foreground">2023 - 2024</p>
              </div>
            </div>
          </BentoBox>
        </div>
      </div>
    </section>
  );
};
