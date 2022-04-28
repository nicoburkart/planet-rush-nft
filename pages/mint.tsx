import { NextPage } from 'next';
import { Title } from '../components/atoms/Typography';
import { MintSection } from '../components/organisms/MintSection';
import { Container } from '../components/templates/Container';
import Layout from '../components/templates/Layout';

const Mint: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Title className="pt-36 pb-24">Coming Soon</Title>
      </Container>

      {/* <MintSection></MintSection> */}
    </Layout>
  );
};

export default Mint;
