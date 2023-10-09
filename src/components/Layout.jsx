import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import Container from './Container/Container';
import UpButton from './UpButton/UpButton';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main style={{backgroundColor: "#21222C"}}>
        <Container>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
            <UpButton />
        </Container>
      </main>
    </>
  );
};

export default Layout;