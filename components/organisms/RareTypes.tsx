import Image from 'next/image';
import { SubTitle, Title } from '../atoms/Typography';
import { Container } from '../templates/Container';

export const RareTypes = () => {
  return (
    <section className="relative py-24">
      <img
        className="absolute top-1/2 w-full -translate-y-1/2 blur-[100px]"
        src="/images/rare-types-blur.svg"
        alt=""
      />
      <img
        className="absolute top-2/3 hidden w-full -translate-y-1/2 sm:block"
        src="/images/space-waves.svg"
        alt=""
      />
      <Container>
        <div className="mb-10 text-center">
          <Title>Planet Types</Title>
          <hr className="mx-auto h-1 w-14 rounded-full border-0 bg-gradient-to-r from-primary to-secondary" />
        </div>
        <div className="flex w-full flex-col justify-between sm:flex-row">
          <div className="drop-shadow-[4px_8px_60px_#D186FB]">
            <Image
              src={`/images/planetTypes/blackhole.png`}
              width={600}
              height={600}
              alt=""
            ></Image>
            <SubTitle className="-mt-20 text-center">Black Hole</SubTitle>
          </div>
          <div className="drop-shadow-[-4px_8px_60px_#FF6960]">
            <Image
              src={`/images/planetTypes/sun.png`}
              width={600}
              height={600}
              alt=""
            ></Image>
            <SubTitle className="-mt-20 text-center">Sun</SubTitle>
          </div>
        </div>
      </Container>
    </section>
  );
};
