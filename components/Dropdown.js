import Link from 'next/link';

export default function Dropdown() {
  return (
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
          <a className='ddoneheaderlist'>SignUp</a>
        </Link>
        <Link href='/#'>
          <a className='ddoneheaderlist'>Logout</a>
        </Link>
      </div>
    </div>
  );
}
