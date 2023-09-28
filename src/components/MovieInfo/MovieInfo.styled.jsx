import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieCard = styled.div`
    --min: 30ch;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    gap: 2rem;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 40px;
    color: #FFFFFF;
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
    border-radius: 8px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const Title = styled.h2`
    font-size: 40px;
`;

export const Text = styled.p`
    font-size: 20px;
`;

export const Subtitle = styled.h3`
    font-size: 24px;
    margin-bottom: 12px;
`;

//MovieDetails styles

export const BackLink = styled(Link)`
    background-color: #950202;
    color: #ffffff;
    padding: 8px 24px;
    border-radius: 8px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: #530202;
    }
`;

export const AdditionalInfo = styled.ul`
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
`;

export const InfoLink = styled(Link)`
    background-color: #950202;
    color: #ffffff;
    padding: 8px 24px;
    border-radius: 8px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: #530202;
    }
`;