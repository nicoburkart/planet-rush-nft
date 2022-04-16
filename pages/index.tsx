import type { NextPage } from 'next';
import Layout from '../components/templates/Layout';
import { Hero } from '../components/organisms/Hero';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero></Hero>
    </Layout>
  );
};

export default Home;
