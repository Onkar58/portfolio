import { FC } from "react";
import BentoBox from "./bento-box";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

export type ExperienceProps = {};
const experiences = [
  {
    company: "Uptycs",
    position: "Software Engineer",
    period: "May 2025 - Present",
    description: [
      "Developing high-performance React applications to handle large, paginated datasets.",
      "Working with libraries like AG Grid, Echarts and Regraph to build interactive analytical dashboards.",
      "Implemented robust TypeScript data transformations to convert complex UI state into backend-ready payloads.",
      "Built advanced grid features including custom row selection, hierarchical data handling, and dynamic filtering.",
    ],
    logo: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.8903 13.0236H2.11123C3.23077 16.3056 6.34075 18.6667 10.0008 18.6667C13.6608 18.6667 16.7722 16.3056 17.8903 13.0236ZM17.9056 12.9764C18.1834 12.1458 18.3334 11.2569 18.3334 10.3333V2H1.66675V10.3333C1.66675 11.2569 1.81676 12.1458 2.09456 12.9764L10.0008 2L17.907 12.9764H17.9056Z"
          fill="#CAFA3C"
        />
      </svg>
    ),
    color: "#6910D6",
  },
  {
    company: "BOP Consultancy and Services",
    position: "Web Developer Intern",
    period: "March 2024 - Nov 2024",
    description: [
      "Implemented new features in their product website with React and NextJS",
      "Worked on the product THQB to find and resolve bugs",
      "Wrote test cases for the unit and integration testing for api endpoints",
      "Worked with libraries like YJS, ThreeJs and external services such as RazorPay integration, Chargebee Billings.",
    ],
    logo: "/bop.png",
    color: "#112555",
  },
  // {
  //   company: "Google Developer Student Clubs",
  //   position: "Web Lead",
  //   period: "2023 - 2024",
  //   description: [
  //     "Led a team of web developers for various campus projects",
  //     "Organized workshops and training sessions on modern web technologies",
  //     "Developed the official GDSC website and maintained it throughout the year",
  //   ],
  //   logo: "/gdsc_logo.png",
  //   color: "#4285F4",
  // },
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
              <div className="h-2" style={{ background: experience.color }} />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-background flex-shrink-0 border border-muted flex items-center justify-center">
                    {typeof experience.logo === "string" ? (
                      <Image
                        src={experience.logo || "/placeholder.svg"}
                        alt={experience.company}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    ) : (
                      experience.logo
                    )}
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
