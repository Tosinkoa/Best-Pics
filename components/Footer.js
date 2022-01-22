import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='footer'>
      <h1>Best Pics Image Gallery</h1>
      <small>
        <Link href='/about'>
          <a className='text-green-700'>About This Project</a>
        </Link>
      </small>
      <p>
        <small>BEST PICS @2021</small>
      </p>
    </footer>
  );
}
