import "../assets/styles/globals.scss";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Apisit Promyos</title>
        <link rel="icon" href="https://res.cloudinary.com/djnasfo5s/image/upload/q_auto,f_auto,o_80/v1605244950/Portfolio/drop4_phwtnh.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
