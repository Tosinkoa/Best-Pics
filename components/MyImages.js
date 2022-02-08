import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function MyImages({ data, isLoading }) {
  return (
    <div>
      <div>
        <h1 className="pagetitle">
          There you go ... <FaHeart className="text-red-600" />
        </h1>
        <p className="text-center m-0 ">
          All data was fetched using{" "}
          <span>
            <a
              className="text-bold text-red-600 text-center m-0"
              href="https://www.pixabay.com/"
              target="_blank"
            >
              pixabay
            </a>
          </span>{" "}
          api
        </p>
      </div>
      <h1 className="message">{isLoading}</h1>
      <div className="myimage">
        {data.map((mydata, i) => (
          <Link href="/[id]" as={`${mydata.id}`} key={i}>
            <div className="eachimage">
              <Image
                className="rounded-md "
                src={mydata.webformatURL}
                alt={mydata.tags.split(",")[0]}
                width={mydata.webformatWidth}
                height={mydata.webformatHeight}
              />
              <p className="imagetitle">{mydata.tags.split(",")[0]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// hover:h-56 hover:w-48 delay-75
