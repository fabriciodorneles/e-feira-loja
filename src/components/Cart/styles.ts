import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    margin-top: -90px;
    background: #fff;
    justify-content: center;
    box-shadow: -2px 3px 5px 0px #a0a0a0;
    font-family: 'Roboto';
    width: 304px;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 450px) {
        width: 130px;
        height: 240px;
    }

    header {
        margin: 16px;
        text-align: center;
        div.total {
            border-bottom: 1px solid #e5e5e5;
            margin-bottom: 8px;
        }
        h1 {
            padding-bottom: 16px;
            font-weight: 700;
            font-size: 24px;
        }
        button.completeOrder {
            font-family: 'Roboto';
            margin-top: 16px;
            margin-bottom: 16px;
            background: #378d3e;
            height: 40px;
            border-radius: 6px;
            border: 0;
            color: #fff;
            padding: 10px;
            width: 250px;
            font-weight: 500;
            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.2, '#378d3e')};
            }
        }
    }

    section.body {
        flex: 1;
        justify-content: center;

        div.product {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 4px;
            h2 {
                margin-left: 20px;
                font-family: 'Roboto';
                font-size: 18px;
                font-weight: 700;
            }

            div.quantityComponent {
                margin-right: 20px;
                display: flex;
                align-items: center;
                border: 1px solid #dadaf1;
                width: 80px;
                height: 22px;
                border-radius: 12px;

                div.quantity {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 6px;

                    h3 {
                        color: #3d3d4d;
                        font-size: 16px;
                    }
                }

                button {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background: #dadaf1;
                    padding: 3px 4px;
                    border: 0;
                    transition: 0.1s;
                }

                button.plus {
                    border-radius: 8px 0px 0px 8px;
                }
                button.minus {
                    border-radius: 0px 8px 8px 0px;
                }
            }
        }
        @media (max-width: 450px) {
        }
    }
`;
