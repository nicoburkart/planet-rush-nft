import { Title } from '../atoms/Typography';
import { HiwStep } from '../molecules/HiwStep';
import { Container } from '../templates/Container';

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="mb-20 text-center">
        <Title>How It Works</Title>
        <hr className="mx-auto h-1 w-14 rounded-full border-0 bg-gradient-to-r from-primary to-secondary" />
      </div>
      <div className="relative">
        <img
          className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 xl:left-0 xl:translate-x-0"
          src={'/images/dotted-background.svg'}
          alt=""
        />
        <img
          className="absolute top-0 right-0 -z-10 hidden xl:block"
          src={'/images/dotted-background.svg'}
          alt=""
        />
        <Container className="space-y-8 rounded bg-[#979DC6] py-32 px-12 lg:flex-row lg:space-y-0 lg:space-x-8 lg:rounded-full lg:px-20">
          <HiwStep
            title="Mint a Planet"
            desc="Check the planet types and their chances and minerals below"
            image="/images/hiw-step-1.svg"
          ></HiwStep>
          <HiwStep
            title="Start Extracting"
            desc="Alpha tester are able to claim an extraction faciliy for free to collect planet ressources"
            image="/images/hiw-step-2.svg"
          ></HiwStep>
          <HiwStep
            title="Collect Energy"
            desc="The NFT should serve as an access pass to e.g. a DAO or some of your content."
            image="/images/hiw-step-3.svg"
          ></HiwStep>
        </Container>
      </div>
    </section>
  );
};
