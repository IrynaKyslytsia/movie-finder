import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    gap: 12px;
`;

export const Link = styled(NavLink)`
    padding: 16px 32px;
    border-radius: 12px;
    color: white;
    font-size: 18px;
    line-height: 1.43;
    font-weight: 600;
    text-transform: uppercase;

  &.active {
    color: white;
    text-decoration: underline;
  }
`;