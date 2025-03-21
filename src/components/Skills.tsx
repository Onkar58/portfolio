import { FC } from "react";
import {
  SiBlender,
  SiCanva,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVitest,
  SiWebrtc,
} from "react-icons/si";
import BentoBox from "./bento-box";
import SkillBadge from "./skill-badge";

import { BiLogoAws } from "react-icons/bi";

export type SkillsProps = {};

const skills = [
  { name: "React", Icon: SiReact, category: "frontend" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, category: "frontend" },
  { name: "NextJs", Icon: SiNextdotjs, category: "frontend" },
  { name: "Three.js", Icon: SiThreedotjs, category: "frontend" },
  { name: "TypeScript", Icon: SiTypescript, category: "frontend" },
  { name: "Node.js", Icon: SiNodedotjs, category: "backend" },
  { name: "Express", Icon: SiExpress, category: "backend" },
  { name: "Firebase", Icon: SiFirebase, category: "backend" },
  { name: "MongoDB", Icon: SiMongodb, category: "backend" },
  { name: "MySQL", Icon: SiMysql, category: "backend" },
  { name: "Django", Icon: SiDjango, category: "backend" },
  { name: "Flask", Icon: SiFlask, category: "backend" },
  { name: "Python", Icon: SiPython, category: "backend" },
  { name: "WebRTC", Icon: SiWebrtc, category: "media" },
  { name: "Blender", Icon: SiBlender, category: "media" },
  {},
];

export const Skills: FC<SkillsProps> = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <BentoBox className="col-span-1 row-span-1 p-6" border="border-muted">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center">
                <span className="text-xs">FE</span>
              </span>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === "frontend")
                .map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
            </div>
          </BentoBox>

          <BentoBox className="col-span-1 row-span-1 p-6" border="border-muted">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 flex items-center justify-center">
                <span className="text-xs">BE</span>
              </span>
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === "backend")
                .map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
            </div>
          </BentoBox>

          <BentoBox className="col-span-1 row-span-1 p-6" border="border-muted">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 flex items-center justify-center">
                <span className="text-xs">3D</span>
              </span>
              3D & Media
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter(
                  (skill) =>
                    skill.category === "3d" || skill.category === "media",
                )
                .map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
            </div>
          </BentoBox>

          <BentoBox
            className="col-span-1 md:col-span-3 row-span-1 p-6"
            gradient="from-primary/10 via-background to-background"
          >
            <h3 className="text-xl font-semibold mb-4">Tools & Workflow</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium">Design</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <SiFigma /> Figma
                  </li>
                  <li className="flex items-center gap-2">
                    <SiCanva /> Canva
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Development</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <SiGit /> Git
                  </li>

                  <li className="flex items-center gap-2">
                    <SiGithub /> GitHub
                  </li>
                  <li className="flex items-center gap-2">
                    <SiDocker /> Docker
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Testing</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <SiJest /> Jest
                  </li>
                  <li className="flex items-center gap-2">
                    <SiVitest />
                    Vitest
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Deployment</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <BiLogoAws />
                    AWS
                  </li>
                  <li className="flex items-center gap-2">
                    <SiVercel />
                    Vercel
                  </li>
                  <li className="flex items-center gap-2">
                    <SiNetlify />
                    Netlify
                  </li>
                </ul>
              </div>
            </div>
          </BentoBox>
        </div>
      </div>
    </section>
  );
};
