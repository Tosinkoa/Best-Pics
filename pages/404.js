import { FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <FaExclamationTriangle /> <h1> 404 </h1>
      <p>Sorry there is nothing here</p>
      <Link href='/'>Go Back Home</Link>
    </Layout>
  );
}
