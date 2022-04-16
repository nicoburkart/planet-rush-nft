import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

export const PrimaryButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 rounded-full border-0 bg-gradient-to-r from-primary to-secondary py-3 px-16 font-michroma text-lg text-white shadow-2xl transition-all duration-200 focus:outline-none sm:mt-0 md:hover:from-secondary md:hover:to-primary"
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 rounded-full border-0 bg-[#F85D5D] py-3 px-20 text-lg text-white shadow-2xl transition-all focus:outline-none sm:mt-0 md:hover:bg-[#fa4e4e]"
    >
      {children}
    </button>
  );
};
