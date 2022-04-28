import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
};

export const PrimaryButton = ({ className, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 rounded-full border-0 bg-gradient-to-r from-primary to-secondary py-3 px-16 font-michroma text-lg text-white shadow-2xl transition-all duration-200 focus:outline-none sm:mt-0 md:hover:from-secondary md:hover:to-primary ${className}`}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ className, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 rounded-full border-0 bg-zinc-100 py-3 font-michroma text-base text-zinc-800 shadow-2xl transition-all focus:outline-none sm:mt-0 md:hover:bg-zinc-200 ${className}`}
    >
      {children}
    </button>
  );
};
