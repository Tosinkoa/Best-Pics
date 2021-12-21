import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home({ data }) {
  console.log(data);

  return <Layout>Pictures</Layout>;
}

export const getServerSideProps = async () => {
  const key = '24906737-e779d7650b85ce968ac3f7b79';
  const query = 'yellow+flower';
  const res = await fetch(`https://pixabay.com/api/?key=${key}&${query}`);
  const data = await res.json();

  return {
    props: { data },
  };
};
