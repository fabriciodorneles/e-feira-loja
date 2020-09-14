import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
    background: #3bb946;
    height: 100vh;
    display: flex;
    align-items: stretch;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            display: block;
            color: #1e5323;
            font-size: 18px;
            margin: 24px;
            text-decoration: none;
            transition: background-color 0.2s;

            &:hover {
                color: ${shade(0.2, '#1e5323')};
            }
        }
    }
    > a {
        display: block;
        color: #7e4c3f;
        font-size: 18px;
        margin: 24px;
        text-decoration: none;
        transition: background-color 0.2s;
        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#7E4C3F')};
        }
    }
`;
export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`;
