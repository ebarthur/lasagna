import clsx from 'clsx';
import React from 'react';

type Props = {
  className?: string;
  content: string;
  handle: string;
};

export const Message = ({ className, content, handle }: Props) => {
  return (
    <blockquote
      className={clsx(className, 'rounded-md bg-zinc-100 p-4 dark:bg-zinc-800 border-l-0 ')}
    >
      <div className="relative text-base font-medium md:flex-grow overflow-visible">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-paperclip absolute top-0 left-5 h-8 w-8 -ml-8 -mt-8 text-zinc-300 z-10 rotate-90"
        >
          <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
        <p className="relative text-sm px-2">{content}</p>
      </div>

      <footer className="mt-1">
        <p className="text-sm font-semibold px-2 text-zinc-500">{handle}</p>
      </footer>
    </blockquote>
  );
};
