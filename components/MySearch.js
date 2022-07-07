import { FaSearch } from "react-icons/fa";

const MySearch = ({ onSubmit, onChange, value }) => {
  return (
    <div className="justify-center flex mt-4">
      <form onSubmit={onSubmit} className="search">
        <label className="searchlabel">
          <FaSearch className="searchlogo" /> Search
        </label>
        <input
          className="sm:w-3/4 focus:outline-none "
          type="search"
          onChange={onChange}
          value={value}
          placeholder="Search for anything..."
        />
      </form>
    </div>
  );
};

export default MySearch;
