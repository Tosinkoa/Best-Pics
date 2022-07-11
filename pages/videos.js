import Layout from "components/Layout";
import Loading from "components/Loading";
import MySearch from "components/MySearch";
import MyVideos from "components/MyVideos";
import { useEffect, useState } from "react";

const Videos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSearch(value);
    await fetchData(value);
  };

  useEffect(() => {
    const fetchData = async (value) => {
      const API_KEY = process.env.API_KEY;
      setIsLoading(true);
      const res = await fetch(`https://pixabay.com/api/videos?key=${API_KEY}&q=${search}`);
      if (!res.ok) return setIsLoading("Failed to load data");
      const { hits } = await res.json();
      setData(hits);
      setIsLoading(false);
    };
    try {
      fetchData(value);
    } catch (e) {
      console.log(e);
      setIsLoading("Failed to load data");
    }
  }, [search, value]);

  return (
    <Layout>
      <div>
        <MySearch onSubmit={onSubmit} onChange={onChange} value={value} />

        {isLoading && <Loading />}
        <div className="md:grid-cols-3 grid lg:grid-cols-4 sm:grid-cols-1 m-8 mt-10 gap-y-8 gap-x-8 relative">
          {!isLoading &&
            data?.map((mydata) => (
              <div key={mydata.id} className='mx-auto'>
                <MyVideos src={mydata.videos.medium.url} title={mydata.tags.split(",")[0]} />
                {/* <MyVideos src={mydata.userImageURL} /> */}
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
