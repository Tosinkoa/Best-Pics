import Link from 'next/link';
import Menubar from './Menubar';
import MyContext from 'store/my-context';
import { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const ctx = useContext(MyContext);

  return (
    <div className='headerbackground'>
      <div className='header'>
        <h1 className='headerlogo'>
          <Link href='/'>BESTPICS</Link>{' '}
        </h1>
        {router.pathname !== '/about' && (
          <div className='search'>
            <label className='searchlabel'>
              <FaSearch className='searchlogo' /> Search
            </label>
            <input
              type='text'
              onChange={ctx.searchHandler}
              value={ctx.search}
            />
          </div>
        )}
        <div className='headerlist'>
          <Menubar />
        </div>
      </div>
    </div>
  );
}
