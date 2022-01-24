import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function MyImages({ data, isLoading }) {
  return (
    <div>
      <h1 className="pagetitle">
        There you go ... <FaHeart className="text-red-600" />
      </h1>
      <h1 className="message">{isLoading}</h1>
      <div className="myimage">
        {data.map((mydata, i) => (
          <Link href="/[id]" as={`${mydata.id}`} key={i}>
            <div className="eachimage">
              <Image
                className="rounded-md"
                src={mydata.webformatURL}
                alt={mydata.tags.split(",").slice(0, 1)}
                width={mydata.webformatWidth}
                height={mydata.webformatHeight}
              />
              <p className="imagetitle">
                {mydata.tags.split(",").splice(0, 1)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
