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
        <Container className="mt-9">
          <PageTitle>Notes</PageTitle>
          <p className="text-sm text-neutral-500">Weekly write-ups, journal and blogs</p>
          <div className="mt-24 flex flex-col items-center justify-center gap-4">
            <SquirrelIcon className="size-32 stroke-neutral-500" />
            <div className="text-center text-sm leading-5 text-neutral-500">
              <p className="">
                Sorry, I&apos;m still cooking this page.
                <p>
                  Check out{' '}
                  <a
                    href="https://lasagna.hashnode.dev"
                    target="_blank"
                    className="text-primary underline underline-offset-4"
                    rel="noreferrer"
                  >
                    my blog on Hashnode <SquareArrowOutUpRight className="inline-flex size-3" />
                  </a>{' '}
                  instead!
                </p>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
