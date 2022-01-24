import Image from "next/image";
import Layout from "components/Layout";

const View = ({ pic }) => {
  return (
    <Layout>
      <div>
        <Image
          src={pic.largeImageURL}
          alt={pic.tags.split(",").slice(0, 1)}
          width={pic.imageWidth}
          height={pic.imageHeight}
        />
      </div>
      <div>
        <a href={pic.largeImageURL} download={pic.tags.split(",").slice(0, 1)}>
          Download
        </a>
      </div>
    </Layout>
  );
};
export default View;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://pixabay.com/api/?key=${process.env.API_KEY}&id=${params.id}`
  );

  const { hits } = await res.json();

  return {
    props: { pic: hits[0] },
  };
};
