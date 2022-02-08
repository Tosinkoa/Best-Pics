import Link from "next/link";
import { useContext } from "react";
import MyContext from "store/my-context";

export default function Footer() {
  const { menuHandler } = useContext(MyContext);

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <h1>Best Pics Image Gallery</h1>
      <small>
        <Link href="/about">
          <a onClick={menuHandler} className="text-green-700">
            About This Project
          </a>
        </Link>
      </small>
      <p>
        <small>
          BEST PICS @<span>{year}</span>
        </small>
      </p>
    </footer>
  );
}
