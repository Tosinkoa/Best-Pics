import { FaHeart } from "react-icons/fa";

const Message = () => {
  return (
    <div>
      <h1 className="pagetitle">
        There you go ... <FaHeart className="text-red-600" />
      </h1>
      <p className="text-center m-0 ">
        All data was fetched using{" "}
        <span>
          <a className="text-bold text-red-600 text-center m-0" href="https://www.pixabay.com/" rel="noreferrer">
            pixabay
          </a>
        </span>
        api
      </p>
    </div>
  );
};

export default Message;
