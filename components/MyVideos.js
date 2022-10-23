import Image from "next/image";

const MyVideos = ({ src, title }) => {
  return (
    <div className="w-full mt-6 flex flex-col ">
      <video autoPlay={false} width={400} height={300} controls className="rounded-md">
        <source src={src} />
      </video>
      <p className=" w-full font-bold border border-gray-500 mt-1  bg-red-500 text-gray-50  text-center py-1 cursor-pointer text-lg shadow-md">{title}</p>

    </div>
  );
};

export default MyVideos;
