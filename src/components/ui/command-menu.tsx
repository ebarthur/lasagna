'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { Button } from './button';
import { CommandIcon } from 'lucide-react';

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <p className="border-t-muted text-muted-foreground fixed bottom-0 left-0 right-0 z-20 hidden border-t bg-white p-1 text-center text-sm dark:border-zinc-300/20 dark:bg-zinc-900 dark:text-white xl:block print:hidden">
        Press{' '}
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs dark:text-white">⌘</span>J
        </kbd>{' '}
        to open the command menu
      </p>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-20 flex rounded-full shadow-2xl xl:hidden print:hidden"
      >
        <CommandIcon className="my-6 size-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, '_blank');
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};
