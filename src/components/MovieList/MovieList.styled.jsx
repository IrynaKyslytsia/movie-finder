import styled from '@emotion/styled';

export const List = styled.ul`
    --min: 30ch;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    gap: 1rem;
`;