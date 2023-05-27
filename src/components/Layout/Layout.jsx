import { Outlet } from 'react-router-dom';
import { PageHeader, NavList, NavItem, StyledLink, Container } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <PageHeader>
        <NavList>
          <NavItem>
            <StyledLink to="/">Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/movies">Movies</StyledLink>
          </NavItem>
        </NavList>
      </PageHeader>
      <main>
        <Container>
            <Outlet />
        </Container>
      </main>
    </>
  );
};