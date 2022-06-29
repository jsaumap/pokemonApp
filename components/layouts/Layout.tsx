import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name='author' content='Javier Sauma' />
        <meta
          name='description'
          content={`Information about pokemon ${title}`}
        />
        <meta name='keywords' content={`Pokemon, ${title}, pokedex`} />
        <meta
          property='og:title'
          content={`Information about pokemon ${title}`}
        />
        <meta
          property='og:description'
          content={`This page contains information about pokemon ${title}`}
        />
        <meta
          property='og:image'
          content={`${origin}/banner.png`}
        />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0px 20px'
        }}
      >
        {children}
      </main>
    </>
  );
};
