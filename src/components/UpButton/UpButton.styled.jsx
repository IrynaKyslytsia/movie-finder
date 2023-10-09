import styled from '@emotion/styled';
import { BsArrowUpCircle } from 'react-icons/bs';

export const Button = styled.button`
    display: flex;
    position: fixed;
    right: 20px;
    bottom: 20px;
    height: 50px;
    width: 50px;
    color: #a30101;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
        color: #530202;
    }
`;

export const Icon = styled(BsArrowUpCircle)`
    color: inherit;
    height: 50px;
    width: 50px;
`;