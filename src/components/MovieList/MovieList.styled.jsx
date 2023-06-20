import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const List = styled.ul`
    --min: 30ch;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    gap: 1rem;
`;

export const ListItem = styled.li`
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: scale(1.03);
        cursor: zoom-in;
    }
`;

export const MovieLink = styled(Link)`
    gap: 24px;
    align-items: center;
    color: #000000;
    
`;

export const Poster = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    object-fit: cover;   
`;

export const Title = styled.h3`
    display: block;
    padding: 12px;
    font-size: 16px;
`;