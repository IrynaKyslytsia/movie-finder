import styled from '@emotion/styled';

export const Form = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    border: 1px solid #450202; 
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
`;

export const Button = styled.button`
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 0;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 1;
    };
`;

export const Input = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 18px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
`;