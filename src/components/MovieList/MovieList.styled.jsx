import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ListItem = styled.li`
    display: flex;
`;

export const MovieLink = styled(Link)`
    display: flex;
    gap: 24px;
    align-items: center;
    color: #000000;
`;

export const Poster = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: 120px;
    object-fit: cover;
`;

export const Title = styled.h3`
    font-size: 32px;
`;