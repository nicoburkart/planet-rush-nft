import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { NavigationItem } from '../atoms/NavigationItem';

type Props = {
  setNavOpen?: Dispatch<SetStateAction<boolean>>;
};

export const NavigationItems = ({ setNavOpen }: Props) => {
  const router = useRouter();

  return (
    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 md:ml-10 md:flex md:items-baseline md:space-x-4">
      <NavigationItem
        title="Mint"
        active={router.pathname === '/mint'}
        href="mint"
        setNavOpen={setNavOpen}
      ></NavigationItem>
      <NavigationItem
        title="Roadmap"
        anker={true}
        active={router.pathname === '#roadmap'}
        href="roadmap"
        setNavOpen={setNavOpen}
      ></NavigationItem>
      <NavigationItem
        title="Open Sea"
        active={router.pathname === '#opensea'}
        href="opensea"
        setNavOpen={setNavOpen}
      ></NavigationItem>
    </div>
  );
};
