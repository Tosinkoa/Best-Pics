import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Showcase from "./Showcase";
import { useEffect } from "react";

import { useRouter } from "next/router";
import { useState } from "react";

export default function Layout({ description, keywords, title, children }) {
  const router = useRouter();
  const [theSRC, setTheSRC] = useState("");
  const [showShowcase, setShowShowcase] = useState("");

  const { pathname } = router;

  useEffect(() => {
    if (pathname === "/") {
      setTheSRC("showcase-vid.mp4");
      setShowShowcase(theSRC && <Showcase src={theSRC} />);
    } else if (pathname === "/videos") {
      setTheSRC("action.mp4");
      setShowShowcase(theSRC && <Showcase src={theSRC} />);
    } else {
      setTheSRC("");
      setShowShowcase("");
    }
  }, [pathname, theSRC]);

  return (
    <div className="overflow-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" contents={keywords} />
      </Head>

      <Header />
      {showShowcase}

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
