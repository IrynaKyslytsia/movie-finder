import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const ListItem = styled.li`
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
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
    position: relative;
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

export const Info = styled.p`
    font-weight: 500;
    color: #585757;
`;

export const Rating = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: #a30101 3px solid;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 700;
`;