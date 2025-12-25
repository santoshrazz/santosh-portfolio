import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TNG App Backend",
    description: "A full customize backend for TNG mobile app",
    image: "/WebScrapper.jpg",
    github: "https://github.com/santoshrazz/subhamApp",
    demo: "https://webscrapper-gray.vercel.app/",
    tags: ["Node.js", "Express.js", "Cloudinery", "Docker"],
  },
  {
    title: "Roam Ripples ",
    description:
      "A B2B Tour and Travel Website That You can use for Trip booking.",
    image: "https://roamripples.com/ror.png",
    github: "https://github.com/santoshrazz/Roam-Of-Ripples",
    demo: "https://roamripples.com/ror.png",
    tags: ["Next.js", "Node.js", "Fastify", "Aws", "Mongodb", "CloudFront"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS.",
    image: "/Portfolio.jpg",
    github: "https://github.com/santoshrazz/portfolio",
    demo: "https://santoshmanav.site",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

export default function Projects() {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      id="projects"
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <p className="text-muted-foreground mb-12">
        Here are some of my recent projects.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <div className="relative aspect-video">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4 mt-auto">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
