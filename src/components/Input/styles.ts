import styled, { css } from 'styled-components';

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
/* export const Container = styled.div<IContainerProps>`
    display: flex;
    align-items: center;

    background: #fff;
    border-radius: 8px;
    padding: 18px 24px;
    width: 100%;
    font-size: 16px;

    & + div {
        margin-top: 24px;
        @media (max-width: 450px) {
            margin-top: 12px;
        }
    }

    h1 {
        margin-bottom: 40px;
        font-weight: 600;
        font-size: 36px;
        line-height: 36px;
    }

    ${(
        props,
    ) =>
        props.isFocused &&
        css`
            color: #ff9000;
            border-color: #ff9000;
        `}

    ${(props) =>
        props.isFilled &&
        css`
            color: #ff9000;
        `}

  input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #b7b7cc;

        &::placeholder {
            color: #b7b7cc;
        }
    }

    svg {
        margin-right: 16px;
    }
`; */
