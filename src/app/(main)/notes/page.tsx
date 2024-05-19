'use client';

import { SocialMedia } from '@/data';
import { CommandMenu } from '@/components/ui/command-menu';
import { SquirrelIcon } from '@/components/icons/squirrel';
import { Container } from '@/components/ui/container';
import { PageTitle } from '@/components/ui/page-title';
import { SquareArrowOutUpRight } from 'lucide-react';
import React from 'react';

export default function Notes() {
  return (
    <div>
      <CommandMenu
        links={[
          ...SocialMedia.map((media) => ({
            url: media.link,
            title: media.name,
          })),
        ]}
      />
      <div>
        <Container className="mt-9 min-h-[60vh] ">
          <PageTitle>Notes</PageTitle>
          <p className="mt-2 text-neutral-500 text-sm">Weekly write-ups, journal and blogs</p>
          <div className="flex flex-col items-center justify-center gap-4 mt-24">
            <SquirrelIcon className="size-32 stroke-neutral-500" />
            <p className="text-center">
              ...Sorry, I&apos;m still cooking this page. Try{' '}
              <a
                href="https://lasagna.hashnode.dev"
                target="_blank"
                className="underline underline-offset-4 text-primary"
              >
                my blog on Hashnode <SquareArrowOutUpRight className="size-3 inline-flex" />
              </a>{' '}
              instead!
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
