import React, { useMemo } from 'react';

import { FiPlus, FiMinus } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useCart } from '../../hooks/cart';

interface IProduct {
    id: string;
    name: string;
    avatar: string;
    price: number;
    quantity: number;
    description: string;
}

interface IProps {
    product: IProduct;
    handleDelete: (id: number) => {};
    handleEditFood: (food: IProduct) => void;
}

const Cart: React.FC = () => {
    const { increment, decrement, products } = useCart();

    function handleIncrement(id: string): void {
        increment(id);
    }

    function handleDecrement(id: string): void {
        decrement(id);
    }

    const cartTotal = useMemo(() => {
        let Total = 0;

        products.map((product) => {
            Total += product.quantity * product.price;
            return product;
        });

        return Total;
    }, [products]);

    return (
        <Container>
            <header>
                <div className="total">
                    <h1>Total: R${cartTotal}</h1>
                </div>
                <Link to="/confirm-order">
                    <button className="completeOrder" type="button">
                        FINALIZAR PEDIDO
                    </button>
                </Link>
            </header>
            <section className="body">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <h2>{product.name}</h2>
                        <div className="quantityComponent">
                            <button
                                type="button"
                                className="plus"
                                onClick={() => handleIncrement(product.id)}
                            >
                                <FiPlus />
                            </button>
                            <div className="quantity">
                                <h3>{product.quantity}</h3>
                            </div>
                            <button
                                type="button"
                                className="minus"
                                onClick={() => handleDecrement(product.id)}
                            >
                                <FiMinus />
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </Container>
    );
};

export default Cart;
