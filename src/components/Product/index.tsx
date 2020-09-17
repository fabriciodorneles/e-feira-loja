import React, { useMemo } from 'react';

import { FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '../../hooks/cart';

import { Container } from './styles';

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
}

const Product: React.FC<IProps> = ({ product }: IProps) => {
    const { addToCart, decrement, products } = useCart();

    function handleAddToCart(item: IProduct): void {
        addToCart(item);
    }

    const orderQuantity = useMemo(() => {
        const productEspe = products.find(
            (orderProduct) => orderProduct.id === product.id,
        );
        if (!productEspe) return 0;
        return productEspe.quantity;
    }, [products, product.id]);

    return (
        <Container>
            <header>
                <img src={product.avatar} alt={product.name} />
            </header>
            <section className="body">
                <div className="name">
                    <h2>{product.name}</h2>
                </div>
                <p className="price">
                    R$ <b>{product.price}</b> /KG
                </p>
                <p className="desc">{product.description}</p>
            </section>
            <section className="footer">
                <div>
                    <button
                        type="button"
                        className="plus"
                        onClick={() => handleAddToCart(product)}
                    >
                        <FiPlus />
                    </button>
                    <div>
                        <p>{orderQuantity}</p>
                    </div>
                    <button
                        type="button"
                        className="minus"
                        onClick={() => decrement(product.id)}
                    >
                        <FiMinus />
                    </button>
                </div>
            </section>
        </Container>
    );
};

export default Product;
