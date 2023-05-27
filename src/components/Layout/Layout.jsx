import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { PageHeader, NavList, NavItem, Container } from './Layout.styled';

const StyledLink = styled(NavLink)`
    color: #ffffff; 
    padding: 8px 24px;
    border: 1px transparent;
    border-radius: 8px;

    &.active {
        border: 1px solid #ffffff;
    }
`

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