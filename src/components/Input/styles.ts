import styled from 'styled-components';

interface IContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div`
    background: #1b5520;
    border-radius: 10px;
    border: 2px solid #1b5520;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }
    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #fff;
        opacity: 0.3;
        ::placeholder {
            color: #fff;
        }
    }

    svg {
        color: #fff;
        opacity: 0.3;
        margin-right: 8px;
    }
`;
