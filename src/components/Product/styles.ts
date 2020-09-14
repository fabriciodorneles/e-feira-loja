import styled from 'styled-components';

export const Container = styled.div`
    background: #f0f0f5;
    border-radius: 8px;
    justify-content: center;
    font-family: 'Roboto';
    width: 210px;
    height: 340px;
    display: flex;
    flex-direction: column;
    @media (max-width: 450px) {
        width: 130px;
        height: 240px;
    }

    header {
        border-radius: 4px 4px 0px 0px;
        height: 152px;
        overflow: hidden;
        transition: 0.3s opacity;
        text-align: center;

        img {
            border-radius: 8px;
            margin-top: 8px;
            width: 188px;
            height: 140px;
            object-fit: cover;
            pointer-events: none;
            user-select: none;
        }
        @media (max-width: 450px) {
            height: 120px;
            img {
                width: 115px;
                height: 100px;
            }
        }
    }

    section.body {
        flex: 1 0 auto;
        h2 {
            font-family: 'Roboto';
            font-weight: 700;
            text-align: center;
            color: #3d3d4d;
        }

        p {
            margin-top: 8px;
            font-family: 'Roboto';
            font-weight: 700;
            text-align: center;
            color: #3d3d4d;
            padding: 0px 12px;
        }

        .desc {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 300;
            margin-top: 15px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-size: 14px;
            flex: 1;
            color: #3d3d4d;
            padding: 0px 12px;
        }

        .price {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex: 1;
            font-style: normal;
            font-size: 12x;
            line-height: 20px;
            padding: 0px 10px;

            b {
                font-weight: 600;
            }

            & + .price {
                padding: 0px 8px;
            }
        }
        @media (max-width: 450px) {
            h2 {
                font-size: 16px;
            }

            p {
                font-size: 14px;
            }

            .desc {
                margin-top: 6px;
            }

            .price {
                font-size: 10x;
                line-height: 10px;
                padding: 0px 10px;
            }
        }
    }

    section.footer {
        display: flex;
        margin: 0px auto;
        flex-shrink: 0;
        padding: 8px 0px;
        justify-items: center;

        div {
            display: flex;
            align-items: center;
            border: 1px solid #dadaf1;
            width: 100px;
            height: 33px;
            border-radius: 10px;

            div {
                border: 0;
                justify-content: center;

                p {
                    color: #3d3d4d;
                    font-size: 14px;
                }
            }

            button {
                display: flex;
                flex-direction: row;
                align-items: center;
                background: #dadaf1;
                padding: 8px;
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
`;
