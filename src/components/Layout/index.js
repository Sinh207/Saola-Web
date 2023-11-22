import { useEffect } from 'react';
import Router from 'next/router';

// antd
import { ConfigProvider } from 'antd';

// styled
import { StyledRootLayout } from './styled';

const RootLayout = ({ children }) => {
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }, [Router.events]);

  return (
        <ConfigProvider>{ children }</ConfigProvider>
  );
};

export default RootLayout;
