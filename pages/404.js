import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="flex items-center bg-white justify-center ">
      <div className="bg-white  flex items-center justify-center mx-4 md:w-full h-full relative">
        <div className="flex flex-col items-center py-16 ">
          <Image
            className="px-4 hidden md:block"
            src="/images/the404.jpg"
            alt="404-image"
            width={400}
            height={300}
          />
          <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
            OOPS!{" "}
          </h1>
          <p className="px-4 pb-10 text-base leading-none text-center  text-gray-700">
            No signal here! we cannot find the page you are looking for{" "}
          </p>
          <Link href="/" passHref>
            <button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-red-800">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
