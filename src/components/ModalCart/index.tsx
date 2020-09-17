import React, { useMemo } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import { useCart } from '../../hooks/cart';
import { Form } from './styles';

interface IProduct {
    id: number;
    name: string;
    avatar: string;
    price: string;
    quantity: string;
    description: string;
}

interface IModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
}

interface IEditProductData {
    name: string;
    avatar: string;
    price: string;
    quantity: string;
    description: string;
}

const ModalCart: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
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
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form>
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
            </Form>
        </Modal>
    );
};

export default ModalCart;
