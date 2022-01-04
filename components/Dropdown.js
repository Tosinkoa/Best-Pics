import Link from 'next/link';
import MyContext from 'store/my-context';
import { useContext } from 'react';

export default function Dropdown() {
  const ctx = useContext(MyContext);

  return (
    <div>
      {!ctx.showMenu && (
        <div className='ddheaderlist'>
          <button className='removemenulist' onClick={ctx.menuHandler}>
            X
          </button>
          <div className='ddmenulist'>
            <Link href='/'>
              <a className='ddoneheaderlist' onClick={ctx.menuHandler}>
                Photos
              </a>
            </Link>
            <Link href='/videos'>
              <a className='ddoneheaderlist' onClick={ctx.menuHandler}>
                Videos
              </a>
            </Link>
            <Link href='/#'>
              <a className='ddoneheaderlist' onClick={ctx.menuHandler}>
                SignIn
              </a>
            </Link>
            <Link href='/#'>
              <a className='ddoneheaderlist' onClick={ctx.menuHandler}>
                SignUp
              </a>
            </Link>
            <Link href='/#'>
              <a className='ddoneheaderlist' onClick={ctx.menuHandler}>
                Logout
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
