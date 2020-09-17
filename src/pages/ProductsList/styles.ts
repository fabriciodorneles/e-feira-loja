import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
    width: 100%;
    height: 255px;
    background: #3bb946;
    display: flex;
    flex-direction: column;

    position: fixed;

    top: 0;
`;

export const HeaderContent = styled.div`
    margin: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 0 auto;
    @media (max-width: 580px) {
        margin: 0px 10px;
    }

    > img {
        @media (min-width: 1260px) {
            display: flex;
            margin-top: -18px;
            margin-bottom: -61px;
            position: relative;
            height: 276px;
        }
        display: flex;
        height: 180px;
        position: relative;

        @media (max-width: 580px) {
            margin-left: -10px;
            height: 150px;
        }
    }

    div.headerRight {
        display: flex;
        flex-direction: column;
        align-items: space-between;
        height: 100%;
        padding-top: 24px;
        padding-bottom: 10px;

        button.user {
            color: #1e5323;
            display: flex;
            flex-grow: 1;
            margin: auto;
            margin-bottom: 60px;
            margin-right: 8px;
            font-family: 'Roboto';
            font-weight: 700;
            background-color: transparent;
            border: 0;

            p {
                margin-left: 8px;
            }
            @media (min-width: 580px) {
                p {
                    font-size: 20px;
                }
                svg {
                    width: 28px;
                    height: 28px;
                }
            }
        }
        button.cart {
            font-family: 'Roboto';
            font-weight: 500;
            color: #fff;
            border: 0;
            margin-top: 5px;
            padding: 18px 20px;
            display: flex;
            background: #52a759;
            border-radius: 4px;
            align-items: center;

            p {
                display: block;
                font-size: 18px;
                margin-left: 16px;
                & + p {
                    margin-top: 4px;
                }
            }

            @media (max-width: 1030px) {
                border: 2px solid #fff;
                padding: 10px 20px;
            }
            @media (min-width: 580px) {
                p {
                    font-size: 18px;
                }
                svg {
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }
`;

export const MenuBar = styled.div`
    background: #52a759;
    height: 22%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 580px) {
        height: 90px;
        h1 {
            text-align: center;
        }
    }
    @media (max-width: 450px) {
        height: 80px;
        h1 {
            max-width: 300px;
            text-align: center;
            font-size: 23px;
        }
    }
`;

export const Content = styled.main`
    background: #fff;
    margin-top: 255px;
    padding-top: 30px;
    display: grid;
    flex: 1;
    width: 100%;
    .loja {
        display: flex;
        flex-direction: row;
        flex: 1;
    }

    .products {
        margin-top: 24px;
        margin: 0 auto;
        padding: auto;
        justify-content: center;
        vertical-align: center;
    }
    .sidebar {
        width: 19rem;
    }
`;

export const Section = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        align-self: center;
    }

    > p {
        color: #999591;
    }
`;

export const ProductsContainer = styled.div`
    width: 1100px;
    display: grid;
    margin: 0 20px;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
    @media (max-width: 1700px) {
        width: 900px;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 12px;
    }

    @media (max-width: 1250px) {
        width: 675px;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 12px;
    }

    @media (max-width: 700px) {
        width: 450px;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 12px;
    }

    @media (max-width: 450px) {
        width: 270px;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 6px;
    }
`;
