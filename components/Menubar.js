import { FaBars } from 'react-icons/fa';
import { FaSignInAlt } from 'react-icons/fa';
import { SiGnuprivacyguard } from 'react-icons/si';
import { IoMdPhotos } from 'react-icons/io';
import { BiMoviePlay } from 'react-icons/bi';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import Link from 'next/link';

export default function Menubar() {
  return (
    <div>
      <nav className='headerlist'>
        <ul className='menulist'>
          <btn className='menuicon'>
            <FaBars />
          </btn>
          <Link href='/'>
            <a className='oneheaderlist'>
              Photos
              <IoMdPhotos className='headericonlist' />
            </a>
          </Link>
          <Link href='/videos'>
            <a className='oneheaderlist'>
              Videos <BiMoviePlay className='headericonlist' />
            </a>
          </Link>
          <li className='oneheaderlist'>
            SignIn <FaSignInAlt className='headericonlist' />
          </li>
          <li className='oneheaderlist'>
            SignUp <SiGnuprivacyguard className='headericonlist' />
          </li>
          <li className='oneheaderlist'>
            Logout <RiLogoutBoxRLine className='headericonlist' />
          </li>
        </ul>
      </nav>
    </div>
  );
}
