import React from 'react';

import { FiPlus, FiMinus } from 'react-icons/fi';
import Button from '../Button';

import { Container } from './styles';

interface IProduct {
    id: number;
    name: string;
    avatar: string;
    price: string;
    quantity: string;
    description: string;
}

interface IProps {
    product: IProduct;
    handleDelete: (id: number) => {};
    handleEditFood: (food: IProduct) => void;
}

const Cart: React.FC = () => {
    return (
        <Container>
            <header>
                <div className="total">
                    <h1>Total: R$137,00</h1>
                </div>
                <button className="completeOrder" type="button">
                    FINALIZAR PEDIDO
                </button>
            </header>
            <section className="body">
                <div className="product">
                    <h2>Abacate</h2>
                    <div className="quantityComponent">
                        <button type="button" className="plus">
                            <FiPlus />
                        </button>
                        <div className="quantity">
                            <h3>10</h3>
                        </div>
                        <button type="button" className="minus">
                            <FiMinus />
                        </button>
                    </div>
                </div>
                <div className="product">
                    <h2>Fruta do Conde</h2>
                    <div className="quantityComponent">
                        <button type="button" className="plus">
                            <FiPlus />
                        </button>
                        <div className="quantity">
                            <h3>10</h3>
                        </div>
                        <button type="button" className="minus">
                            <FiMinus />
                        </button>
                    </div>
                </div>
                <div className="product">
                    <h2>Brocolis Americano</h2>
                    <div className="quantityComponent">
                        <button type="button" className="plus">
                            <FiPlus />
                        </button>
                        <div className="quantity">
                            <h3>10</h3>
                        </div>
                        <button type="button" className="minus">
                            <FiMinus />
                        </button>
                    </div>
                </div>

                <div className="product">
                    <h2>Mandioca</h2>
                    <div className="quantityComponent">
                        <button type="button" className="plus">
                            <FiPlus />
                        </button>
                        <div className="quantity">
                            <h3>10</h3>
                        </div>
                        <button type="button" className="minus">
                            <FiMinus />
                        </button>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default Cart;
