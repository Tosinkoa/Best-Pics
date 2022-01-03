import { FaBars } from 'react-icons/fa';
import { FaSignInAlt } from 'react-icons/fa';
import { SiGnuprivacyguard } from 'react-icons/si';
import { IoMdPhotos } from 'react-icons/io';
import { BiMoviePlay } from 'react-icons/bi';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import Link from 'next/link';
import { useContext } from 'react';
import MyContext from 'store/my-context';

export default function Menubar() {
  const ctx = useContext(MyContext);

  return (
    <div>
      <div>
        <button onClick={ctx.menuHandler} className='menuicon'>
          <FaBars />
        </button>
      </div>
      {!ctx.showMenu && (
        <nav className='headerlist'>
          <ul className='menulist'>
            <li className='oneheaderlist'>
              <Link href='/'>
                <a>
                  Photos <IoMdPhotos className='headericonlist' />
                </a>
              </Link>
            </li>
            <li className='oneheaderlist'>
              <Link href='/videos'>
                <a>
                  Videos <BiMoviePlay className='headericonlist' />
                </a>
              </Link>
            </li>
            <li className='oneheaderlist'>
              <Link href='/#'>
                <a>
                  SignIn <FaSignInAlt className='headericonlist' />
                </a>
              </Link>
            </li>
            <li className='oneheaderlist'>
              <Link href='/#'>
                <a>
                  SignUp <SiGnuprivacyguard className='headericonlist' />
                </a>
              </Link>
            </li>
            <li className='oneheaderlist'>
              <Link href='/#'>
                <a>
                  Logout <RiLogoutBoxRLine className='headericonlist' />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}