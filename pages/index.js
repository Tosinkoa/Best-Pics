import Layout from "../components/Layout";
import MyImage from "../components/MyImages";
import MyContext from "store/my-context";
import { useContext } from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  const ctx = useContext(MyContext);

  const { search } = ctx;
  useEffect(() => {
    const fetchData = async () => {
      const key = "24906737-e779d7650b85ce968ac3f7b79";
      setIsLoading("Loading...");
      const res = await fetch(
        `https://pixabay.com/api/?key=${key}&q=${search}`
      );
      if (!res.ok) return setIsLoading("Failed to load data");

      const { hits } = await res.json();
      setIsLoading("");
      setdata(hits);
    };
    try {
      fetchData();
    } catch (error) {
      setIsLoading("Failed to load data");
    }
  }, [search]);

  return (
    <Layout>
      <div>
        <MyImage data={data} isLoading={isLoading} />
        {!isLoading && data.length === 0 && (
          <h1 className="message">Picture not found</h1>
        )}
      </div>
    </Layout>
  );
}
