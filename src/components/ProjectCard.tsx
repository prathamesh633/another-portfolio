import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const ProjectCard = ({ title, description, tags, github, demo }: ProjectCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 animate-fade-in">
      <div className="space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
          {description}
        </p>

        <div className="flex gap-3 pt-2">
          {github && (
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              asChild
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Source
              </a>
            </Button>
          )}
          {demo && (
            <Button
              variant="default"
              size="sm"
              className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90"
              asChild
            >
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
