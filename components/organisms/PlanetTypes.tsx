import Image from 'next/image';
import { SubTitle, Title } from '../atoms/Typography';
import { Container } from '../templates/Container';

export const PlanetTypes = () => {
  return (
    <section className="relative py-24">
      <img
        className="absolute top-1/2 w-full -translate-y-1/2 blur-[100px]"
        src="/images/planet-types-blur.svg"
        alt=""
      />
      <Container className="md:pb-40">
        <div className="mb-20 text-center">
          <Title>Planet Types</Title>
          <hr className="mx-auto h-1 w-14 rounded-full border-0 bg-gradient-to-r from-primary to-secondary" />
        </div>
        <div className="relative flex flex-col justify-between space-y-12 sm:translate-x-[30px] sm:flex-row sm:space-y-0 sm:-space-x-16 ">
          <div className="absolute left-[10%] top-full">
            <Image
              src={'/images/stars.svg'}
              alt=""
              height={79.03}
              width={119.72}
            ></Image>
          </div>
          <div className="absolute right-[25%] top-[5%]">
            <Image
              src={'/images/stars.svg'}
              alt=""
              height={79.03}
              width={119.72}
            ></Image>
          </div>
          <div className="order-first drop-shadow-xl">
            <Image
              src={`/images/planetTypes/ice.png`}
              width={250}
              height={250}
              alt=""
            ></Image>
            <SubTitle className="mt-2 text-center">Ice</SubTitle>
          </div>
          <div className="order-last drop-shadow-xl">
            <Image
              src={`/images/planetTypes/moon.png`}
              width={250}
              height={250}
              alt=""
            ></Image>
            <SubTitle className="mt-2 text-center">Moon</SubTitle>
          </div>
          <div className="order-1 drop-shadow-xl sm:translate-y-1/3">
            <Image
              src={`/images/planetTypes/gas.png`}
              width={250}
              height={250}
              alt=""
            ></Image>
            <SubTitle className="mt-2 text-center">Gas</SubTitle>
          </div>
          <div className="order-3 drop-shadow-xl sm:translate-y-1/3">
            <Image
              src={`/images/planetTypes/lava.png`}
              width={250}
              height={250}
              alt=""
            ></Image>
            <SubTitle className="mt-2 text-center">Lava</SubTitle>
          </div>
          <div className="order-1 drop-shadow-xl sm:translate-y-2/3">
            <Image
              src={`/images/planetTypes/wet.png`}
              width={250}
              height={250}
              alt=""
            ></Image>
            <SubTitle className="mt-2 text-center">Wet</SubTitle>
          </div>
        </div>
      </Container>
    </section>
  );
};
