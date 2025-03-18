import { Code2, Database, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const technologies = {
  languages: ["JavaScript/TypeScript", "Next.js", "C/C++", "SQL", "HTML/CSS"],
  backend: ["Node.js", "Express", "Fastify", "MySQL", "MongoDB"],
  tools: ["Git", "Docker", "VS Code", "Postman", "AWS"],
};

export default function Technology() {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      id="technology"
    >
      <h2 className="text-3xl font-bold mb-8">Technology</h2>
      <p className="text-muted-foreground mb-12">
        Here's what I typically work with.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              {technologies.languages.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {tech}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Backend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              {technologies.backend.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {tech}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              {technologies.tools.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {tech}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
