import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
    padding: 32px;
    background-color: #002077;
`;

export const NavList = styled.ul`
    display: flex;
    gap: 40px;
`;

export const NavItem = styled.li`       
    background-color: #002077;    
`;

export const StyledLink = styled(NavLink)`
    color: #ffffff; 
    padding: 8px 24px;
    border: 1px transparent;
    border-radius: 8px;

    &.active {
        border: 1px solid #ffffff;
    }
`;

export const Container = styled.div`
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 15px;
`
