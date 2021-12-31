import Link from 'next/link';
import Menubar from './Menubar';
import Showcase from './Showcase';

export default function Header() {
  return (
    <div className='headerbackground'>
      <div className='header'>
        <h1 className='headerlogo'>
          <Link href='/'>BESTPICS</Link>{' '}
        </h1>
        <div className='headerlist'>
          <Menubar />
        </div>
      </div>
      <Showcase />
    </div>
  );
}
