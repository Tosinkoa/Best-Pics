import Link from "next/link";
import MyContext from "store/my-context";
import { useContext } from "react";
import { IoMdPhotos } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";

export default function Dropdown() {
  const {
    menuHandler,
    showMenu,
    showLogout,
    showSignup,
    showSignin,
    logoutHandler,
  } = useContext(MyContext);

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
            {showSignin && (
              <Link href="/login">
                <a className="ddoneheaderlist" onClick={menuHandler}>
                  <FaSignInAlt className="ddicon" />
                  SignIn
                </a>
              </Link>
            )}
            {showSignup && (
              <Link href="/signup">
                <a className="ddoneheaderlist" onClick={menuHandler}>
                  <SiGnuprivacyguard className="ddicon" />
                  SignUp
                </a>
              </Link>
            )}
            {showLogout && (
              <Link href="/">
                <a
                  className="ddoneheaderlist"
                  onClick={() => {
                    logoutHandler();
                    menuHandler;
                  }}
                >
                  <RiLogoutBoxRLine className="ddicon" />
                  Logout
                </a>
              </Link>
            )}
            <Link href="/about">
              <a className="ddoneheaderlist" onClick={menuHandler}>
                <FcAbout className="ddicon" />
                About
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
