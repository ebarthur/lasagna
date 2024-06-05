import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';

import { ThemeProvider } from '@/components/provider/theme-provider';
import React from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'Lasagna | My portfolio',
  description: 'This is my portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <body className={`${GeistSans.className}`}>
              {children}
              <Analytics />
            </body>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
