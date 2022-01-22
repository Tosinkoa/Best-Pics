import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Showcase from "./Showcase";
import { useContext } from "react";
import MyContext from "store/my-context";
import { useRouter } from "next/router";

export default function Layout({ description, keywords, title, children }) {
  const router = useRouter();
  const ctx = useContext(MyContext);
  return (
    <div className="overflow-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" contents={keywords} />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {!ctx.showMenu && <div className="backdrop"></div>}

      <Header />

      {router.pathname === "/" && <Showcase />}
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "The best picture",
  description: "A website to view the best pictures",
  keywords: "pictures, pics",
};
