import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    button {
        background: #378d3e;
        height: 56px;
        border-radius: 10px;
        border: 0;
        color: #8ce494;
        padding: 0 16px;
        width: 100%;
        font-weight: 500;
        margin-top: 16px;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#378d3e')};
        }
    }
`;
