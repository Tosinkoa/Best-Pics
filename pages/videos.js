import Layout from 'components/Layout';
import { useContext, useEffect, useState } from 'react';
import MyContext from 'store/my-context';

export default function MyVideos() {
  const [data, setData] = useState([]);

  const ctx = useContext(MyContext);

  const { search } = ctx;
  useEffect(() => {
    async () => {
      const key = '24906737-e779d7650b85ce968ac3f7b79';
      const res = await fetch(
        `https://pixabay.com/api/videos/?key=${key}&q=${search}`
      );
      const { hits: thedata } = await res;
      setData(thedata);
    };
  }, [search]);

  return (
    <Layout>
      <div>
        <h1 className='pagetitle'>Videos</h1>
        <div className='myimage'>
          {data.map((mymovie, i) => (
            <div className='oneimage' key={i}>
              <iframe
                src={mymovie.videos.medium.url}
                title={mymovie.tags.split('').slice(0, 1)}
                autoplay='false'
                width='350'
                height='250'
              />
              <p>{mymovie.tags.split(',').slice(0, 1)}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
