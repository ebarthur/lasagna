'use client';

import { PageTitle } from '@/components/ui/page-title';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Photos } from '@/components/ui/photos';
import { SocialLink } from '@/components/ui/social-link';
import { SocialMedia, Quotes } from '@/data';
import { Skills } from '@/data';
import Projects from '@/app/(main)/components/projects';
import { Quote } from '@/app/(main)/components/quotes';
import { useState, useEffect } from 'react';
import { Section } from '@/components/ui/section';
import { GlobeIcon } from 'lucide-react';
import { CommandMenu } from '@/components/ui/command-menu';
import { SkillIcon } from '@/components/icons/skill';

type Availability = 'available' | 'unavailable' | 'limited';

const AvailabilityStyles: Record<Availability, string> = {
  available: 'text-green-500 dark:text-green-500 border-green-500 dark:border-green-500',
  unavailable: 'text-red-500 dark:text-red-500 border-red-500 dark:border-red-500',
  limited: 'text-yellow-500 dark:text-yellow-500 border-yellow-500 dark:border-yellow-500',
};

export default function Home() {
  const [randomQuote, setRandomQuote] = useState<{ author: string; content: string }>();

  useEffect(() => {
    setRandomQuote(Quotes[Math.floor(Math.random() * Quotes.length)]);
  }, []);

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
      <Container className="mt-9">
        <div className="max-w-2xl">
          <div className="flex gap-4 items-center">
            <div className="h-6 w-6 bg-black/80 dark:bg-white animate-pulse"></div>
            <PageTitle>Lasagna</PageTitle>
          </div>
          <div className="text-xs text-pretty">
            <span className="font-semibold bg-neutral-500/30 px-0.5 py-1 rounded-lg">
              {' '}
              /ləˈzanjə/
            </span>
            - pasta in the form of broad often ruffled ribbons
          </div>

          <p className="my-6 max-w-2xl text-sm text-balance">
            <a
              href="https://github.com/ebarthur"
              target="_blank"
              className="underline text-primary"
            >
              I&apos;m Ebenezer Arthur.
            </a>{' '}
            I used to consider myself a{' '}
            <code className="bg-green-500/30 px-0.5 py-1 rounded-lg">developer</code> but in
            reality, I just love creating things. Currently, I&apos;m mostly focused on developing
            great <code className="bg-yellow-500/30 px-0.5 py-1 rounded-lg">user</code> experiences
            using React & Next.js, while exploring the world of{' '}
            <code className="bg-red-500/30 px-0.5 py-1 rounded-lg">backend</code> development.
          </p>
          <div className="my-4">
            <a
              className="inline-flex text-sm gap-x-1.5 align-baseline leading-none hover:underline hover:text-primary"
              href="https://www.google.com/maps/place/Accra"
              target="_blank"
            >
              <GlobeIcon className="size-3" />
              Accra, Ghana, GMT+0
            </a>
          </div>
          <div className="text-sm">
            Current Availability:{' '}
            <Badge variant="outline" className={AvailabilityStyles['limited']}>
              Limited
            </Badge>
          </div>
          <div className="mt-6 flex gap-6">
            {SocialMedia.map((socialProfile) => (
              <SocialLink
                key={socialProfile.name}
                aria-label={`Follow on ${socialProfile.name}`}
                href={socialProfile.link}
                icon={socialProfile.icon}
              />
            ))}
          </div>
        </div>
      </Container>
      <Photos />
      <Container>
        <div className="my-8">
          <div className="flex flex-col gap-2">
            <h3 className="flex gap-4 items-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-balance">
              <SkillIcon />
              Skills
            </h3>
            <div className="flex flex-wrap gap-1 max-w-2xl">
              {Skills.skills.map((skill) => {
                return <Badge key={skill}>{skill}</Badge>;
              })}
            </div>
          </div>
        </div>
      </Container>
      <Projects />
      {randomQuote && (
        <Container>
          <div className="max-w-md">
            <Section>
              <Section.Title as="h2">Quote worth thinking about</Section.Title>
              <Section.Content>
                <div className="my-8">
                  <Quote quote={randomQuote.content} author={randomQuote.author} />
                </div>
              </Section.Content>
            </Section>
          </div>
        </Container>
      )}
    </div>
  );
}
