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
      <div className='headerlist'>
        <div className='menulist'>
          <Link href='/'>
            <a className='oneheaderlist'>
              Photos <IoMdPhotos className='headericonlist' />
            </a>
          </Link>
          <Link href='/videos'>
            <a className='oneheaderlist'>
              Videos <BiMoviePlay className='headericonlist' />
            </a>
          </Link>
          <Link href='/#'>
            <a className='oneheaderlist'>
              SignIn <FaSignInAlt className='headericonlist' />
            </a>
          </Link>
          <div className='hidden'>
            <Link href='/#'>
              <a className='oneheaderlist'>
                SignUp <SiGnuprivacyguard className='headericonlist' />
              </a>
            </Link>
          </div>
          <div className='hidden'>
            <Link href='/#'>
              <a className='oneheaderlist'>
                Logout <RiLogoutBoxRLine className='headericonlist' />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
