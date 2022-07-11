import Link from "next/link";
import Menubar from "./Menubar";
import { FaBars } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { IoMdPhotos } from "react-icons/io";
import { RiMovieFill } from "react-icons/ri";
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
