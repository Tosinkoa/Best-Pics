import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import Showcase from './Showcase';
import { useRouter } from 'next/router';

export default function Layout({ description, keys, title, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name={keys} contents={keys} />
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,900&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Monoton&family=Press+Start+2P&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      <Header />

      {router.pathname === '/' && <Showcase />}

      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'The best picture',
  description: 'A website to view the best pictures',
  keys: 'pictures, pics',
};
