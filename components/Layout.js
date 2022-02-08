import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Showcase from "./Showcase";
import { useContext } from "react";
import MyContext from "store/my-context";
import { useRouter } from "next/router";

export default function Layout({ description, keywords, title, children }) {
  const router = useRouter();
  const { showMenu } = useContext(MyContext);
  return (
    <div className="overflow-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" contents={keywords} />
      </Head>
      {showMenu && <div className="backdrop"></div>}

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
