import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const List = styled.ul`
    --min: 30ch;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    gap: 1rem;
`;

export const ListItem = styled.li`
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: scale(1.03);
        cursor: zoom-in;
    }
`;

export const MovieLink = styled(Link)`
    display: inline-block;
    height: 100%;
    color: #000000;    
`;

export const CardWrap = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
`;

export const PosterWrap = styled.div`
    width: 100%;
    height: 100%;
`;

export const Poster = styled.img`
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;   
`;

export const TitleWrap = styled.div`
        height: 84px;
        padding: 16px 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
`;

export const Title = styled.h3`
    display: block;
`;

export const ReleaseDate = styled.p`
    font-weight: 500;
    color: #585757;
`;