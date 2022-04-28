/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { PrimaryButton } from '../atoms/Buttons';
import { Paragraph, Title } from '../atoms/Typography';
import { Container } from '../templates/Container';

export const MintSection = () => {
  return (
    <section className="body-font relative flex flex-col text-zinc-50">
      <div className="absolute right-0">
        <Image
          src={'/images/space-ship.png'}
          height={380}
          width={562}
          alt=""
        ></Image>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-[130%] w-1/2 bg-gradient-to-r from-black"></div>

      <Container className="py-24 pt-0 md:flex-row md:items-start">
        <div className="relative flex h-[1000px] w-1/2 -translate-y-16 flex-col items-center justify-center pr-16">
          <Image
            src={'/images/planet-group.png'}
            height={1712}
            width={1097}
            alt=""
          ></Image>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center pt-[500px]">
          <div className="mb-8 text-center">
            <Title>Mint</Title>
            <hr className="mx-auto h-1 w-14 rounded-full border-0 bg-gradient-to-r from-primary to-secondary" />
          </div>
          <Paragraph className="mb-8 max-w-[540px] text-center">
            Congratulations! You are one of our early users! This means you’ll
            be rewarded with a cheaper mint price and a free extraction facility
            on the planet!
          </Paragraph>
          <PrimaryButton className="max-w-[300px]">Mint Planet</PrimaryButton>
        </div>
      </Container>
    </section>
  );
};
