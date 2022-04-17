import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Navigation } from '../organisms/Navigation';
import { Footer } from '../organisms/Footer';
import { ToastContainer } from 'react-toastify';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Navigation></Navigation>
    {children}
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />

    <Footer></Footer>
  </div>
);

export default Layout;
