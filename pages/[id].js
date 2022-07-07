import Image from "next/image";
import Layout from "components/Layout";
import axios from "axios";
import FileDownload from "js-file-download";
import Loading from "components/Loading";

const View = ({ pic }) => {
  const getPicture = async () => {
    axios({
      url: `${pic.largeImageURL}`,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, pic.largeImageURL);
    });
  };

  return (
    <Layout>
      {!pic ? (
        <Loading />
      ) : (
        <div className="w-full">
          <div className="sm:-mt-5 md:mt-8 w-full place-content-center mx-auto flex">
            <Image
              src={pic.largeImageURL}
              alt={pic.tags.split(",")[0]}
              width={600}
              height={450}
              objectFit="contain"
              className="rounded-lg"
            />
          </div>

          <div className="mt-3 justify-center text-center items-center  first-line: bg-red-600 rounded-md text-gray-200 p-4 py-2 mx-auto w-fit font-semibold">
            <button className="inline-flex text-xl " onClick={getPicture}>
              Download
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};
export default View;

export const getServerSideProps = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://pixabay.com/api/?key=${process.env.API_KEY}&id=${id}`);

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const { hits } = await res.json();

  return {
    props: { pic: hits[0] },
  };
};
