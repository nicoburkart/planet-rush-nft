import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WagmiProvider } from 'wagmi';
import { connectors } from '../wagmi.connectors';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider autoConnect connectors={connectors}>
      <Component {...pageProps} />
    </WagmiProvider>
  );
}

export default MyApp;
