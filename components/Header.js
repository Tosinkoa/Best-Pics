import Link from 'next/link';

export default function Header() {
  return (
    <div className='headerbackground'>
      <div className='header'>
        <h1 className='headerlogo'>
          <Link href='/'>BEST PICS</Link>{' '}
        </h1>
        <div className='headerlist'>
          <p>Photos</p>
          <p>Videos</p>
          <p>SignIn</p>
          <p>SignUp</p>
        </div>
      </div>
    </div>
  );
}
