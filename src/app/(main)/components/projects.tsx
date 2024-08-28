import { motion } from 'framer-motion';

import { ProjectLayout } from '@/components/ui/project-layout';
import { ProjectCard } from '@/components/ui/project-card';
import { CurrentProjects as MyCurrentProjects } from '@/data';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '@/lib/animation';
import { AlignVerticalSpaceAround, Link2, MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <ProjectLayout title="Featured Projects." intro="A list of projects I've worked">
        <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight">
          <AlignVerticalSpaceAround />
          <span className="w-fit px-0.5 py-1">Now</span>
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {MyCurrentProjects.map((project) => (
            <motion.li
              key={project.title}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
        <div className="mt-12 w-fit cursor-pointer text-xl font-bold tracking-tight underline underline-offset-2 hover:text-primary">
          <Link href="https://github.com/ebarthur/">
            <p className="flex items-center gap-4">
              <Link2 />
              All projects <MoveRight className="animate-pulse" />
            </p>
          </Link>
        </div>
      </ProjectLayout>
    </>
  );
}
