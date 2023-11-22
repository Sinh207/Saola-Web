import '@assets/css/index.css';
import dynamic from 'next/dynamic';

// components
const RootLayout = dynamic(() => import('@components/Layout'), {
  ssr: false,
});
const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <RootLayout>{page}</RootLayout>);
  return (
      <main>
        {getLayout(<Component {...pageProps} />)}
      </main>
  );
};

export default MyApp;
