import { FC } from "react";
import BentoBox from "./bento-box";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

export type ExperienceProps = {};
const experiences = [
  {
    company: "BQP Consultancy and Services",
    position: "Web Developer Intern",
    period: "March 2024 - Nov 2024",
    description: [
      "Implemented new features in their product website with React and NextJS",
      "Worked on the product THQB to find and resolve bugs",
      "Wrote test cases for the unit and integration testing for api endpoints",
    ],
    logo: "/bop.png",
    color: "#0ea5e9",
  },
  {
    company: "Google Developer Student Clubs",
    position: "Web Lead",
    period: "2023 - 2024",
    description: [
      "Led a team of web developers for various campus projects",
      "Organized workshops and training sessions on modern web technologies",
      "Developed the official GDSC website and maintained it throughout the year",
    ],
    logo: "/gdsc_logo.png",
    color: "#6366f1",
  },
];

export const Experience: FC<ExperienceProps> = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional roles and contributions throughout my career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <BentoBox
              key={index}
              className="col-span-1 p-0 overflow-hidden"
              border="border-muted hover:border-primary/20"
            >
              <div
                className="h-2"
                style={{ backgroundColor: experience.color }}
              />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-background flex-shrink-0 border border-muted flex items-center justify-center">
                    <Image
                      src={experience.logo || "/placeholder.svg"}
                      alt={experience.company}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{experience.position}</h3>
                    <p className="text-muted-foreground text-sm">
                      {experience.company}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {experience.period}
                    </p>
                  </div>
                </div>

                <ScrollArea className="h-[180px] mt-4">
                  <ul className="space-y-2">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                        <p className="text-sm">{item}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </BentoBox>
          ))}
        </div>
      </div>
    </section>
  );
};
