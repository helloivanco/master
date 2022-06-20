import 'tailwindcss/tailwind.css';
import '../styles/styles.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
