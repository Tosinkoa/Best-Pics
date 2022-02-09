import Image from "next/image";
import Layout from "components/Layout";
import axios from "axios";
import FileDownload from "js-file-download";
import { TiArrowDownThick } from "react-icons/ti";

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
      <div className="sm:-mt-5 lg:m-0">
        <Image
          src={pic.largeImageURL}
          alt={pic.tags.split(",")[0]}
          width={pic.imageWidth}
          height={pic.imageHeight}
        />
      </div>

      <div className="mt-3 justify-center text-center items-center  first-line: bg-red-600 rounded-md text-gray-200 p-4 mx-auto w-2/4">
        <button className="inline-flex text-xl " onClick={getPicture}>
          Download
          <div className="bg-white inline-flex p-1 ml-2  rounded-full">
            <TiArrowDownThick className=" text-gray-800 animate-bounce mt-1 text-center" />
          </div>
        </button>
      </div>
    </Layout>
  );
};
export default View;

export const getServerSideProps = async ({ params }) => {
  const { id } = params;

  const res = await fetch(
    `https://pixabay.com/api/?key=${process.env.API_KEY}&id=${id}`
  );

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
