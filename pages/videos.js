import Layout from "components/Layout";
import Loading from "components/Loading";
import MySearch from "components/MySearch";
import MyVideos from "components/MyVideos";
import { useEffect, useState } from "react";

const Videos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  // const [search, setSearch] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const fetchData = async (value) => {
    const API_KEY = process.env.API_KEY;
    setIsLoading(true);
    const res = await fetch(`https://pixabay.com/api/videos?key=${API_KEY}&q=${value}`);
    if (!res.ok) return setIsLoading("Failed to load data");
    const { hits } = await res.json();
    setData(hits);
    setIsLoading(false);
  };

  const onSubmit = async () => {
    e.preventDefault();
    setSearch(value);
    await fetchData(value);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (e) {
      console.log(e);
      setIsLoading("Failed to load data");
    }
  }, [value]);

  console.log(value);

  return (
    <Layout>
      <div>
        <MySearch onSubmit={onSubmit} onChange={onChange} value={value} />

        {isLoading && <Loading />}
        {!isLoading &&
          data?.map((mydata) => (
            <div key={mydata.id}>
              <MyVideos src={mydata.videos.medium.url} />
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Videos;
