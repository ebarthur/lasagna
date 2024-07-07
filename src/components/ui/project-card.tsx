import type { Project } from '@/data';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { LinkIcon } from '@/components/icons/link';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="h-full" key={project.title}>
      <div className="mt-6">
        {project.link ? (
          <Card.Title href={project.link.href}>{project.title}</Card.Title>
        ) : (
          <Card.Title>{project.title}</Card.Title>
        )}
      </div>
      <Card.Description>{project.description}</Card.Description>
      <div className="z-10 mb-6 mt-6 flex flex-wrap gap-1">
        {project.techStack.map((techStackItem) => (
          <Badge key={techStackItem}>{techStackItem}</Badge>
        ))}
      </div>
      <div className="relative z-10 mt-auto flex text-sm font-medium text-zinc-400 transition group-hover:text-primary dark:text-zinc-200">
        {project.link ? (
          <p className="flex items-center">
            <LinkIcon className="h-6 w-6 flex-none" />
            <span className="ml-2">{project.link.label}</span>
            <span className="ml-2 h-1 w-1 rounded-full bg-green-700" />
          </p>
        ) : (
          <p className="flex items-center gap-x-2 text-zinc-400">
            Shut down <span className="h-1 w-1 rounded-full bg-red-700" />
          </p>
        )}
      </div>
    </Card>
  );
};
