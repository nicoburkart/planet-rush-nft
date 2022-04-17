import { PrimaryButton } from '../atoms/Buttons';
import { Paragraph, Title } from '../atoms/Typography';
import { toast } from 'react-toastify';
import { Container } from '../templates/Container';

export const Hero = () => {
  return (
    <section className="body-font text-zinc-50">
      <Container className="py-24 lg:flex-row">
        <img
          className="absolute top-0 left-0 -z-10 blur-[80px]"
          src={'images/hero-blur-top.svg'}
          alt=""
        />
        <div className="mb-16 flex flex-col items-center text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-24 lg:pr-16 lg:text-left">
          <Title className="lg:text-3xl xl:text-5xl">
            Build Your{' '}
            <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
              Empire
            </span>
          </Title>
          <h2 className="mb-4 font-poppins text-base font-bold tracking-[0.4rem] text-zinc-50 xl:text-xl">
            BUILD - EXPAND - COLLECT
          </h2>

          <Paragraph className="mb-8 font-semibold">
            Take part of a journey where you can build your stellar empire,
            invest in mining platforms, command fleets, rade planets and collect
            Energy Credits.
          </Paragraph>
          <div className="flex justify-center">
            <PrimaryButton
              onClick={() => {
                toast('🚀 Coming soon!');
              }}
            >
              Test Alpha
            </PrimaryButton>
          </div>
        </div>
        <div className="relative z-0 flex h-[350px] w-5/6 justify-center sm:h-[460px] lg:w-1/2 lg:max-w-lg">
          <img
            className="absolute top-0 -left-10 -z-10 w-full blur-[40px]"
            src={'images/hero-blur-center.svg'}
            alt=""
          />
          <div className="relative my-auto flex h-full w-full max-w-[500px] -translate-y-10 items-center justify-center">
            <img
              className="absolute right-[10%] top-[10%] w-2/5 drop-shadow-[-4px_-8px_40px_#F8BD27]"
              src="/images/hero-blackhole.png"
              alt=""
            />
            <img
              className="absolute -left-[15%] w-2/3 "
              src="/images/hero-star.png"
              alt=""
            />
            <img
              className="absolute bottom-0 w-2/3 "
              src="/images/hero-wet-1.png"
              alt=""
            />
            <img
              className="absolute right-[10%] w-1/5 "
              src="/images/hero-wet-2.png"
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
