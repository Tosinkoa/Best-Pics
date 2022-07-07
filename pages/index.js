import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import MySearch from "components/MySearch";
import Message from "components/message";
import MyImages from "../components/MyImages";
import Loading from "components/Loading";

function Home() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const searchHandler = (e) => setSearch(e.target.value);
  const searchSubmit = (e) => e.preventDefault();

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = process.env.API_KEY;
      setIsLoading(true);
      const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${search}`);
      if (!res.ok) return setIsLoading("Failed to load data");

      const { hits } = await res.json();
      setIsLoading(false);
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
      <div className="w-full">
        <Message />
        <MySearch onSubmit={searchSubmit} onChange={searchHandler} value={search} />
        {isLoading ? (
          <Loading />
        ) : (
          <div className="myimage">
            {data.map((mydata) => (
              <div key={mydata.id}>
                <div className="eachimage">
                  <MyImages
                    className="rounded-md"
                    id={mydata.id}
                    src={mydata.webformatURL}
                    alt={mydata.tags.split(",")[0]}
                    width={mydata.webformatWidth}
                    height={mydata.webformatHeight}
                  />
                  <p className="imagetitle">{mydata.tags.split(",")[0]}</p>
                </div>
              </div>
            ))}
            {!isLoading && data.length === 0 && <h1 className="message">Picture not found</h1>}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Home;
