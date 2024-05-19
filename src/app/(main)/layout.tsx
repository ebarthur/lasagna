import React from 'react';
import { Header } from '@/components/navigation/navbar';
import '../globals.css';
import { Footer } from '@/components/navigation/footer';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
