import Image from 'next/image';
import Link from 'next/link';

export const LinkCollection = () => {
  return (
    <div className="flex space-x-4 pt-8">
      <Link href={'https://discord.com/'}>
        <a>
          <Image
            height={50}
            width={50}
            src={'/icons/twitter.svg'}
            alt="link to twitter"
          ></Image>
        </a>
      </Link>
      <Link href={'https://discord.com/'}>
        <a>
          <Image
            height={50}
            width={55}
            src={'/icons/opensea.svg'}
            alt="link to open sea"
          ></Image>
        </a>
      </Link>
      <Link href={'https://discord.com/'}>
        <a>
          <Image
            height={50}
            width={50}
            src={'/icons/etherscan.svg'}
            alt="link to etherscan"
          ></Image>
        </a>
      </Link>
      <Link href={'https://discord.com/'}>
        <a>
          <Image
            height={50}
            width={64}
            src={'/icons/discord.svg'}
            alt="link to discord channel"
          ></Image>
        </a>
      </Link>
    </div>
  );
};
