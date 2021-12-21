import Layout from '../components/Layout';
import MyImage from '../components/MyImages';
import { API_URL } from 'config';
export default function Home({ data }) {
  return (
    <Layout>
      Pictures
      {data.map((mydata) => (
        <MyImage key={mydata.id} data={mydata} />
      ))}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const key = '24906737-e779d7650b85ce968ac3f7b79';
  const query = 'muscles';
  const res = await fetch(`${API_URL}/api/?key=${key}&q=${query}`);
  const data = await res.json();

  return {
    props: { data: data.hits },
  };
};
