import { IoMdPhotos } from "react-icons/io";
import Link from "next/link";
import { RiMovieFill } from "react-icons/ri";

export default function Menubar() {
  return (
    <div>
      <div className="headerlist">
        <div className="menulist">
          <Link href="/">
            <a className="oneheaderlist">
              Photos <IoMdPhotos className="headericonlist" />
            </a>
          </Link>
          <Link href="/videos">
            <a className="oneheaderlist">
              Videos <RiMovieFill className="headericonlist" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
