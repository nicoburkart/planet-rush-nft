import { PrimaryButton } from '../atoms/Buttons';
import { Paragraph, Title } from '../atoms/Typography';
import { Container } from '../templates/Container';

export const Hero = () => {
  return (
    <section className="body-font text-zinc-50">
      <Container className="py-24 lg:flex-row">
        <img
          className="absolute top-0 left-0 -z-10"
          src={'/assets/images/hero-blur-top.svg'}
          alt=""
        />
        <div className="mb-16 flex flex-col items-center text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-24 lg:pr-16 lg:text-left">
          <Title className="lg:text-3xl xl:text-5xl">
            Build Your{' '}
            <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
              Empire
            </span>
          </Title>
          <h2 className="mb-4 font-poppins text-base font-bold text-zinc-50 xl:text-xl tracking-[0.4rem]">
            BUILD - EXPAND - COLLECT
          </h2>

          <Paragraph className="mb-8 font-semibold">
            Take part of a journey where you can build your stellar empire,
            invest in mining platforms, command fleets, rade planets and collect
            Energy Credits.
          </Paragraph>
          <div className="flex justify-center">
            <PrimaryButton>CONTACT</PrimaryButton>
          </div>
        </div>
        <div className="relative z-0 w-5/6 lg:w-full lg:w-1/2 lg:max-w-lg">
          <img
            className="absolute top-0 -left-10 -z-10 blur-[60px]"
            src={'assets/images/hero-blur-center.svg'}
            alt=""
          />
          <img
            className="object-cover object-center drop-shadow-2xl"
            alt="hero"
            src={'assets/images/hero-xl.png'}
          />
        </div>
      </Container>
    </section>
  );
};