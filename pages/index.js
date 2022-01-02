import Layout from '../components/Layout';
import MyImage from '../components/MyImages';

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        {data.length === 0 && <h1>No picture to show here</h1>}
        <MyImage data={data} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const key = '24906737-e779d7650b85ce968ac3f7b79';
  const query = 'Cars';
  const res = await fetch(`https://pixabay.com/api/?key=${key}&q=${query}`);
  const data = await res.json();

  return {
    props: { data: data.hits },
  };
};
