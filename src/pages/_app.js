import '@assets/css/index.css';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

// components
const RootLayout = dynamic(() => import('@components/Layout'), {
  ssr: false,
});

const StyledMain = styled.main`
  background-color: #000;
`;
const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <RootLayout>{page}</RootLayout>);
  return (
      <StyledMain>
        {getLayout(<Component {...pageProps} />)}
      </StyledMain>
  );
};

export default MyApp;
