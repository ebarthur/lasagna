import React from 'react';

import { Container } from '@/components/ui/container';
import { ProjectIcon } from '@/components/icons/projector';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  intro: string;
}

export const ProjectLayout = ({
  title,
  intro,
  children,
  ...rest
}: React.PropsWithChildren<Props>) => {
  return (
    <Container className="mt-12 sm:mt-24" {...rest}>
      <header className="max-w-3xl">
        <h1 className="flex gap-4 items-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-balance">
          <ProjectIcon />
          {title}
        </h1>
        <p className="mt-6 text-sm text-balance">{intro}</p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  );
};
