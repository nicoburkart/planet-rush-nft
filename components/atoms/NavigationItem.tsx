import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  title: string;
  href?: string;
  active: boolean;
  anker?: boolean;
  setNavOpen?: Dispatch<SetStateAction<boolean>>;
};

export const NavigationItem = ({
  title,
  active,
  href,
  anker,
  setNavOpen,
}: Props) => {
  return (
    <Link href={`${anker ? '#' + href : '/' + href}`}>
      <a
        onClick={() => {
          if (setNavOpen) {
            setNavOpen(false);
          }
        }}
        className={
          (active ? 'text-zinc-50' : 'text-zinc-50') +
          ' md:text-md block rounded-md px-3 py-2 text-base font-medium hover:text-zinc-50 md:inline'
        }
      >
        {title}
      </a>
    </Link>
  );
};
