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
import { GlobeIcon, PlusIcon } from 'lucide-react';
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
        <div>
          <PageTitle>Artur</PageTitle>
          <div className="mt-2 max-w-2xl text-balance text-sm">
            to be cracked you only need one thing: passion
          </div>
          <div className="mb-2 mt-4">
            <a
              className="inline-flex gap-x-1.5 align-baseline text-sm leading-none hover:text-primary hover:underline"
              href="https://www.google.com/maps/place/Accra"
              target="_blank"
              rel="noreferrer"
            >
              <GlobeIcon className="size-3" />
              Accra, Ghana, GMT+0
            </a>
          </div>
          <div className="text-sm">
            Current Availability:{' '}
            <Badge variant="outline" className={AvailabilityStyles.available}>
              Available
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
            <h3 className="flex items-center gap-4 text-balance text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              <SkillIcon />
              Skills
            </h3>
            <div className="flex max-w-2xl flex-wrap gap-1">
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
