import clsx from 'clsx';
import React from 'react';

type Props = {
  className?: string;
  quote: string;
  author?: string;
};

export const Quote = ({ className, quote, author }: Props) => {
  return (
    <blockquote
      className={clsx(className, 'rounded-md border-l-0 bg-zinc-100 p-4 dark:bg-zinc-800')}
    >
      <div className="relative overflow-visible text-base font-medium md:flex-grow">
        <svg
          className="absolute left-0 top-0 z-10 -ml-8 -mt-8 h-8 w-8 text-zinc-300"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="relative px-2">{quote}</p>
      </div>

      {author && (
        <footer className="mt-1">
          <p className="text-sm font-semibold text-zinc-500">{author}</p>
        </footer>
      )}
    </blockquote>
  );
};
