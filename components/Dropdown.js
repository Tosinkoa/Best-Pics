import { FaBars } from 'react-icons/fa';
import { FaSignInAlt } from 'react-icons/fa';
import { SiGnuprivacyguard } from 'react-icons/si';
import { IoMdPhotos } from 'react-icons/io';
import { BiMoviePlay } from 'react-icons/bi';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import Link from 'next/link';

export default function Dropdown() {
  return (
    <div>
      <div>
        <button className='ddmenuicon'>
          <FaBars />
        </button>
      </div>
      <div className='ddheaderlist'>
        <div className='ddmenulist'>
          <Link href='/'>
            <a className='ddoneheaderlist'>Photos</a>
          </Link>
          <Link href='/videos'>
            <a className='ddoneheaderlist'>Videos</a>
          </Link>
          <Link href='/#'>
            <a className='ddoneheaderlist'>SignIn</a>
          </Link>
          <Link href='/#'>
            <a className='ddoneheaderlist '>SignUp</a>
          </Link>
          <Link href='/#'>
            <a className='ddoneheaderlist '>Logout</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
