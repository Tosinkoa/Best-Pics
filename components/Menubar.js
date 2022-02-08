import { FaSignInAlt } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoMdPhotos } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Link from "next/link";
import { useContext } from "react";
import MyContext from "store/my-context";
import { FcAbout } from "react-icons/fc";

export default function Menubar() {
  const { showLogout, showSignup, showSignin, logoutHandler } =
    useContext(MyContext);

  return (
    <div>
      <div className="headerlist">
        <div className="menulist">
          <Link href="/">
            <a className="oneheaderlist">
              Photos <IoMdPhotos className="headericonlist" />
            </a>
          </Link>
          {showSignin && (
            <Link href="/login">
              <a className="oneheaderlist">
                SignIn <FaSignInAlt className="headericonlist" />
              </a>
            </Link>
          )}

          {showSignup && (
            <Link href="/signup">
              <a className="oneheaderlist">
                SignUp <SiGnuprivacyguard className="headericonlist" />
              </a>
            </Link>
          )}

          {showLogout && (
            <Link href="/">
              <a className="oneheaderlist" onClick={logoutHandler}>
                Logout <RiLogoutBoxRLine className="headericonlist" />
              </a>
            </Link>
          )}
          <Link href="/about">
            <a>
              <FcAbout className="abouticon" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
