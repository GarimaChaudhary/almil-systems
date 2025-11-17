import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Almil Systems India | Premium Aluminium Windows & Doors</title>
        <meta
          name="description"
          content="US-engineered premium aluminium windows and doors. 15+ years of global excellence, now in India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
