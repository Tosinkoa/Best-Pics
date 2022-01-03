import { MyContextProvider } from 'store/my-context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  );
}

export default MyApp;
