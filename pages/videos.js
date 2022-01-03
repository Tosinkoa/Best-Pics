import Layout from 'components/Layout';
import { useContext, useEffect, useState } from 'react';
import MyContext from 'store/my-context';

export default function MyVideos() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState('');

  const ctx = useContext(MyContext);
  const { search } = ctx;

  useEffect(() => {
    const fetchData = async () => {
      const key = '24906737-e779d7650b85ce968ac3f7b79';
      setIsLoading('Loading...');
      const res = await fetch(
        `https://pixabay.com/api/videos/?key=${key}&q=${search}`
      );
      const { hits } = await res.json();
      setIsLoading('');
      setData(hits);
    };
    try {
      fetchData();
    } catch (error) {
      setIsLoading('Error fetching data');
    }
  }, [search]);

  return (
    <Layout>
      <div>
        <h1 className='pagetitle'>Videos</h1>
        <div className='myimage'>
          {!isLoading && data.length === 0 && <h1>Nothing to show here</h1>}
          <h1>{isLoading}</h1>
          {data.map((mymovie, i) => (
            <div className='oneimage' key={i}>
              <iframe
                src={mymovie.videos.medium.url}
                title={mymovie.tags.split('').slice(0, 1)}
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
