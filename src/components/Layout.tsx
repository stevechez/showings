import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>My Open House</title>
        <meta name="description" content="My Open House" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
