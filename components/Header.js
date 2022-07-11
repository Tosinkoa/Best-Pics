import Link from "next/link";
import Menubar from "./Menubar";
import { FaBars } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { Popover } from "@headlessui/react";
import HeadlessTransition from "./HeadlessTransition";

export default function Header() {
  return (
    <div className="headerbackground">
      <div className="header">
        <h1 className="headerlogo">
          <Link href="/">BESTPICS</Link>{" "}
        </h1>

        <Popover>
          <Popover.Button>
            <div className="headermenuicon">
              <button>
                <FaBars />
              </button>
            </div>
          </Popover.Button>
          <Popover.Panel>
            <HeadlessTransition>
              <Dropdown />
            </HeadlessTransition>
          </Popover.Panel>
        </Popover>
        <div className="headerlist">
          <Menubar />
          {/* <Dropdown menuHandler={menuHandler} showMenu={showMenu} /> */}
        </div>
      </div>
    </div>
  );
}
