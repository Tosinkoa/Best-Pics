import Layout from 'components/Layout';

export default function MyVideos({ data }) {
  return (
    <Layout>
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
            <p>{mymovie.tags.split('').slice(0, 1)}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const key = '24906737-e779d7650b85ce968ac3f7b79';
  const query = 'dance';
  const res = await fetch(
    `https://pixabay.com/api/videos/?key=${key}&q=${query}`
  );
  const data = await res.json();

  return {
    props: { data: data.hits },
  };
};
