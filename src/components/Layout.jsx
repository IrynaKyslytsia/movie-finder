import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import Container from './Container/Container';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Container>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;