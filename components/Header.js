import Link from "next/link";
import Menubar from "./Menubar";
import MyContext from "store/my-context";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import Dropdown from "./Dropdown";

export default function Header() {
  const router = useRouter();
  const { menuHandler, search, searchHandler, searchSubmit } =
    useContext(MyContext);

  return (
    <div className="headerbackground">
      <div className="header">
        <h1 className="headerlogo">
          <Link href="/">BESTPICS</Link>{" "}
        </h1>
        {router.pathname === "/" && (
          <form onSubmit={searchSubmit} className="search">
            <label className="searchlabel">
              <FaSearch className="searchlogo" /> Search
            </label>
            <input
              className="sm:w-3/4 focus:outline-none "
              type="search"
              onChange={searchHandler}
              value={search}
              placeholder="Search for anything..."
            />
          </form>
        )}
        <div className="headermenuicon">
          <button onClick={menuHandler}>
            <FaBars />
          </button>
        </div>
        <div className="headerlist">
          <Menubar />
          <Dropdown />
        </div>
      </div>
    </div>
  );
}
