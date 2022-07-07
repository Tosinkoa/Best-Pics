import Link from "next/link";
import Menubar from "./Menubar";
import { FaBars } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(true);

  const menuHandler = () => setShowMenu(!showMenu);

  return (
    <div className="headerbackground">
      <div className="header">
        <h1 className="headerlogo">
          <Link href="/">BESTPICS</Link>{" "}
        </h1>
        <div className="headermenuicon">
          <button onClick={menuHandler}>
            <FaBars />
          </button>
        </div>
        <div className="headerlist">
          <Menubar />
          <Dropdown menuHandler={menuHandler} showMenu={showMenu} />
        </div>
      </div>
    </div>
  );
}
