'use client';

import { SocialMedia } from '@/data';
import { CommandMenu } from '@/components/ui/command-menu';
import { Container } from '@/components/ui/container';
import { AboutMe } from '@/data';
import { Message } from '@/app/(main)/about/components/message';
import React from 'react';
import { PageTitle } from '@/components/ui/page-title';
import { LucideTwitter, SquareArrowOutUpRight } from 'lucide-react';

export default function About() {
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
      <Container className="mt-9 min-h-fit">
        <div>
          <div className="my-8">
            <PageTitle className="text-2xl">A little about me</PageTitle>
            <p className="text-neutral-500">A mini-autobiography 🏄‍♂️</p>
          </div>
          <div className="hover:underline underline-offset-4 group w-fit">
            <a href="https://github.com/ebarthur" target="_blank">
              <PageTitle className="text-xl flex gap-2 items-center">
                Ebenezer Arthur
                <SquareArrowOutUpRight className="size-3 group-hover:stroke-primary" />
              </PageTitle>
            </a>
          </div>

          <div className="mb-4 text-neutral-500 text-sm">Wilderness Explorer, Tribe 54</div>
          <div className="grid md:grid-cols-3 break-inside-avoid-column gap-6">
            <div className="text-sm md:my-14">
              Born in Ghana, in an environment that always inspire innovation. I have the mindset
              that everything around me is someone else&apos;s dedicated work, so I do my best to
              leave a positive mark in every space I find myself.
            </div>
            <div className="text-sm md:my-10">
              Developing skills through hands-on experience is my guiding principle, and I embrace
              learning by doing, which allows me to explore passions and interests without guilt. I
              strive to imbue quality into every endeavor.
              <p className="text-neutral-500 mt-4 italic">
                &quot;Obsess over your craft, and mastery will follow.&quot; — @lasagna
              </p>
            </div>
            <div className="text-sm md:my-6">
              The web is an endless canvas for creativity, and I&apos;m driven by its potential.
              Though I&apos;m only scratched the surface, I&apos;m excited by the continuous
              learning and innovation it offers.
              <p className="text-sm underline underline-offset-4 text-primary mt-4 md:mt-8 flex gap-3 items-center">
                <a href="https://twitter.com/StatmanAartt" target="_blank">
                  Connect with me @StatmanAartt
                </a>
                <LucideTwitter className="size-3" />
              </p>
            </div>
          </div>
          <div className="w-fit my-7">
            <Message content={AboutMe.content} handle={AboutMe.handle} />
          </div>
        </div>
      </Container>
    </div>
  );
}
