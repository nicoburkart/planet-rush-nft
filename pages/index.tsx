import type { NextPage } from 'next';
import Layout from '../components/templates/Layout';
import { Hero } from '../components/organisms/Hero';
import { HowItWorks } from '../components/organisms/HowItWorks';
import { PlanetTypes } from '../components/organisms/PlanetTypes';
import { RareTypes } from '../components/organisms/RareTypes';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <PlanetTypes></PlanetTypes>
      <RareTypes></RareTypes>
    </Layout>
  );
};

export default Home;
