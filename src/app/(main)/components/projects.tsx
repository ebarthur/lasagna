import { motion } from 'framer-motion';

import { ProjectLayout } from '@/components/ui/project-layout';
import { ProjectCard } from '@/components/ui/project-card';
import { CurrentProjects as MyCurrentProjects } from '@/data';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '@/lib/animation';
import { AlignVerticalSpaceAround } from 'lucide-react';

export default function Projects() {
  return (
    <>
      <ProjectLayout
        title="Featured Projects."
        intro="A list of projects I've worked on, I'm working on and I will work on."
      >
        <h2 className="flex gap-4 items-center text-2xl font-bold tracking-tight">
          <AlignVerticalSpaceAround />
          <span className="bg-yellow-500/30 px-0.5 py-1 rounded-lg w-fit">Now</span>
        </h2>
        <p className="mt-2 text-sm">Projects I currently work on.</p>
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
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
      </ProjectLayout>
    </>
  );
}
