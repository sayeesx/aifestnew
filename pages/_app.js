import Layout from '../components/layout.js';
import Loader from '../components/loader.js';  // Import the Loader component
import '../styles/globals.css';  // Ensure global styles are imported here

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loader />  {/* Loader component will be displayed during route transitions */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
