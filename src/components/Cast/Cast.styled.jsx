import styled from '@emotion/styled';

export const CastList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    padding-left: 32px;
    padding-right: 32px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const ActorWrap = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
`;

export const PhotoWrap = styled.div`
    width: 100%;
    height: 100%;
`;

export const Info = styled.div`
        height: 136px;
        margin-top: 6px;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        gap: 8px;
`;

export const ActorPhoto = styled.img`
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
`;

export const ActorName = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

export const Text = styled.p`
    color: #FFFFFF80;
`;

export const Message = styled.div`
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 500;
`;