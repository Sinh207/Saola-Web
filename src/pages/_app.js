import '@assets/css/index.css';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Head from 'next/head';
import { IMAGE_CONST } from '@app/utils/images';
import SEO from '@components/SEO';
import helper from '@app/utils/helper';

// components
const RootLayout = dynamic(() => import('@components/Layout'), {
  ssr: false,
});
const Preloader = dynamic(() => import('@components/Preloader'), {
  ssr: false,
});
const StyledMain = styled.main`
  background-color: #000;
`;
const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <RootLayout>{page}</RootLayout>);
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={IMAGE_CONST.favicon}
          sizes="any"
        />
        <link
          rel="android-touch-icon"
          href={IMAGE_CONST.logo}
        />
        <link
          rel="apple-touch-icon"
          href={IMAGE_CONST.logo}
        />
      </Head>
      <SEO
        url="https://saola.io/"
        openGraphType="website"
        schemaType="article"
        title="Saola"
        description="We are experts in crafting bold visuals, distinctive brand identities, innovative products, and immersive websites. Whether you want to elevate your company's visual language, build an MVP, or explore a new idea, we'll take care of everything."
        image={IMAGE_CONST.cover}
        createdAt={
          helper.dateConvertFullTimeString(new Date().getTime())
        }
        updatedAt={
          helper.dateConvertFullTimeString(new Date().getTime())
        }
        keywords="MVP, UX/UI design, Branding & graphic design, Website development, Software development, Test automation, Dedicated team"
      />
      <Preloader />
      <StyledMain>
        {getLayout(<Component {...pageProps} />)}
      </StyledMain>
    </>
  );
};

export default MyApp;
