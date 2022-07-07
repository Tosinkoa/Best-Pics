import Link from "next/link";
import { IoMdPhotos } from "react-icons/io";
import { RiMovieFill } from "react-icons/ri";

export default function Dropdown({ menuHandler, showMenu }) {
  return (
    <div className="mydropdown">
      {!showMenu && (
        <div className="ddheaderlist">
          <div className="ddmenulist">
            <Link href="/">
              <a className="ddoneheaderlist" onClick={menuHandler}>
                <IoMdPhotos className="ddicon" />
                Photos
              </a>
            </Link>

            <Link href="/videos">
              <a className="ddoneheaderlist" onClick={menuHandler}>
                <RiMovieFill className="ddicon" />
                Videos
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
