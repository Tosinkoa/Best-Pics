import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function MyImages({ data, isLoading }) {
  return (
    <div>
      <h1 className="pagetitle">
        There you go ... <FaHeart className="text-red-600" />
      </h1>
      <h1 className="message">{isLoading}</h1>
      <div className="myimage">
        {data.map((mydata, i) => (
          <div key={i} className="eachimage">
            <img
              className="rounded-lg"
              src={mydata.webformatURL}
              alt={mydata.tags.split(",").slice(0, 1)}
            />
            <span>
              <div className="imagetitle">
                <p>{mydata.tags.toUpperCase().split(",").slice(0, 1)}</p>
                <Link href="/[id]" as={`${mydata.id}`}>
                  <button>View</button>
                </Link>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
