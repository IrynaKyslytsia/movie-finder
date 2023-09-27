import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieCard = styled.div`
--min: 30ch;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
gap: 1rem;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const Poster = styled.img`
    display: block;
    max-width: 100%;
`;

export const Info = styled.div`
    padding: 16px;
`;

export const Title = styled.h2`
    font-size: 36px;
    margin-bottom: 48px;
`;

export const Text = styled.p`
    font-size: 20px;
    margin-bottom: 24px;
`;

export const Subtitle = styled.h3`
    font-size: 24px;
    margin-bottom: 16px;
`;

//MovieDetails styles

export const BackLink = styled(Link)`
    background-color: #6c0303;
    color: #ffffff;
    padding: 8px 24px;
    border-radius: 8px;
    margin-bottom: 40px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: #450202;
    }
`;

export const AdditionalInfo = styled.ul`
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
`;

export const InfoLink = styled(Link)`
    background-color: #6c0303;
    color: #ffffff;
    padding: 8px 24px;
    border-radius: 8px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: #450202;
    }
`;