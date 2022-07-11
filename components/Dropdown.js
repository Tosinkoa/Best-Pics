import { Popover } from "@headlessui/react";
import Link from "next/link";
import { IoMdPhotos } from "react-icons/io";
import { RiMovieFill } from "react-icons/ri";

export default function Dropdown() {
  return (
    <div className="mydropdown">
      <div className="ddheaderlist">
        <div className="ddmenulist">
          <Link href="/">
            <a className="ddoneheaderlist">
              <IoMdPhotos className="ddicon" />
              Photos
            </a>
          </Link>

          <Link href="/videos">
            <a className="ddoneheaderlist">
              <RiMovieFill className="ddicon" />
              Videos
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
