import { ReactNode } from "react";
import './globals.css'
import Head from "next/head";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import BotpressChat from "./components/BotpressChat";
      
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <title>Articukates</title>
        <meta
          name="description"
          content="Tencen makes it simple for you to build and grow your SaaS applications, or any business idea"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <HeaderSection />
        <main>{children}</main>
        <BotpressChat />  
        <FooterSection />
      </body>
    </html>
  );
};

export default Layout;