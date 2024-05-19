'use client';

import React from 'react';
import { Container } from '@/components/ui/container';
import { NavLink, NavigationItems } from './navigation';

export const Footer = () => {
  return (
    <footer className="mt-16">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {NavigationItems.map((item) => (
                  <NavLink key={item.href} href={item.href}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm tracking-tighter text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Ebenezer Arthur. All rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
};
