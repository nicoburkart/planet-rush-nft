import Link from 'next/link';
import { toast } from 'react-toastify';
import { PrimaryButton } from '../atoms/Buttons';
import { Title } from '../atoms/Typography';
import { LinkCollection } from '../molecules/LinkCollection';
import { Container } from '../templates/Container';

export const Footer = () => {
  return (
    <footer className="body-font relative mt-24 bg-[url('/images/footer-background.svg')] bg-cover bg-top text-zinc-50">
      <Container className="relative pt-48 pb-8">
        <div className="flex flex-col items-center space-y-6 pb-24">
          <Title className="text-center lg:text-3xl xl:text-5xl">
            Build Your{' '}
            <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
              Empire
            </span>
          </Title>
          <PrimaryButton
            onClick={() => {
              toast('🚀 Coming soon!');
            }}
          >
            Test Alpha
          </PrimaryButton>
          <LinkCollection></LinkCollection>
        </div>

        <div className="flex w-full flex-col sm:flex-row">
          <Link href={'/'}>
            <a className="flex flex-row items-center justify-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
              <h1 className="title-font ml-4 hidden text-xl font-medium text-gray-50 md:block">
                CreativeContracts
              </h1>
            </a>
          </Link>

          <p className="mt-4 text-sm text-gray-200 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:pl-4 sm:pt-3">
            © 2022 Creative Contracts —
            <a
              href="https://twitter.com/nicoburkart"
              className="ml-1 text-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              @nicoburkart
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};
