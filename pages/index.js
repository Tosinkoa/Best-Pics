import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://pixabay.com/api/?key=24906737-e779d7650b85ce968ac3f7b79'
  );
  const data = await res.json;

  return {
    props: {},
  };
};
