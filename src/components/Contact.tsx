"use client";
import Loading from "@/app/loading";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { FC, FormEvent, useCallback, useState } from "react";
import { toast } from "sonner";
import BentoBox from "./bento-box";
import { Button } from "./ui/button";

export type ContactProps = {};

const recipient = "onkarwaghmode58@gmail.com";
const subject = encodeURIComponent("Request for a Call");
const body = encodeURIComponent(
  `Hello,\n\nI would like to schedule a call.\n\nName: \nPreferred Date & Time: \nMeeting Type: (Google Meet / Zoom)\n\nLooking forward to your response.\n\nBest regards,\n`,
);

export const Contact: FC<ContactProps> = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting");
    const data = new FormData();
    Array.from(e.target as HTMLFormElement).forEach((element) => {
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLSelectElement ||
        element instanceof HTMLTextAreaElement
      ) {
        data.set(element.name, element.value);
      }
    });
    const response = await fetch("/api/contact/", {
      method: "POST",
      body: data,
    });
    setLoading(false);
    if (response.status === 500) {
      toast.error("Something went wrong", {
        duration: 3000,
      });

      return;
    }

    toast("Message sent", {
      duration: 3000,
    });
  }, []);
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time
            opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <BentoBox
            className="col-span-1 md:col-span-2 row-span-1 p-6"
            gradient="from-primary/10 to-background"
          >
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  name="message"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button disabled={isLoading} type="submit" className="w-full">
                {!isLoading ? "Send" : <Loading />}
              </Button>
            </form>
          </BentoBox>

          <div className="col-span-1 space-y-4 md:space-y-6">
            <BentoBox className="p-6" border="border-muted">
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:onkarwaghmode58@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      onkarwaghmode58@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Linkedin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/onkar58"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      /in/onkar58
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Github className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a
                      href="https://github.com/onkar58"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      /onkar58
                    </a>
                  </div>
                </li>
              </ul>
            </BentoBox>

            <BentoBox className="p-6" gradient="from-background to-primary/5">
              <h3 className="text-lg font-semibold mb-4">Availability</h3>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="font-medium">Available for work</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Currently accepting new projects and job opportunities. Let's
                discuss how I can help bring your ideas to life.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={`mailto:${recipient}?subject=${subject}&body=${body}`}
                  className="w-full justify-center"
                >
                  Schedule a Call
                </Link>
              </Button>
            </BentoBox>
          </div>
        </div>
      </div>
    </section>
  );
};
