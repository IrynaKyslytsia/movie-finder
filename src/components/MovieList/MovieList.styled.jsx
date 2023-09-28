import styled from '@emotion/styled';

export const List = styled.ul`
    --min: 30ch;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    gap: 1rem;
    margin-bottom: 40px;
`;

// movies

export const LoadMoreBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    background-color: #a30101;
    color: #ffffff;
    width: 160px;
    height: 36px;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: #530202;
    }
`;