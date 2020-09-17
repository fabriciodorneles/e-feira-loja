import React, { useMemo } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Header, HeaderContent, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import { useCart } from '../../hooks/cart';
// import useWindowDimensions from '../../hooks/useWindowDimensions';

interface IProduct {
    id: string;
    name: string;
    avatar: string;
    price: number;
    quantity: number;
    description: string;
}

const ConfirmOrder: React.FC = () => {
    const { products, increment, decrement } = useCart();
    // const { width } = useWindowDimensions();

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
            <Header>
                <HeaderContent>
                    <Link to="/">
                        <img src={logoImg} alt="EFeira" />
                    </Link>
                </HeaderContent>
            </Header>
            <Content>
                <div className="adress">
                    <h1 className="title">Confirmação de Pedido</h1>
                    <h3>Endereço de Entrega:</h3>
                    <div>Pedro Paulo Freitas</div>
                    <div>Rua Altamiro de Abreu, 237</div>
                    <div>Apto. 707 Partenon - RJ</div>
                    <div>Fone: 21 9785-4800</div>
                </div>
                <section className="cart">
                    <div className="product">
                        <header>
                            <div className="total">
                                <h1>Total: R${cartTotal}</h1>
                            </div>
                            <button className="completeOrder" type="button">
                                CONFIRMAR PEDIDO
                            </button>
                        </header>
                        <section className="body">
                            {products.map((product) => (
                                <div key={product.id} className="product">
                                    <div className="quantityComponent">
                                        <button
                                            type="button"
                                            className="plus"
                                            onClick={() =>
                                                handleIncrement(product.id)
                                            }
                                        >
                                            <FiPlus />
                                        </button>
                                        <div className="separator" />
                                        <button
                                            type="button"
                                            className="minus"
                                            onClick={() =>
                                                handleDecrement(product.id)
                                            }
                                        >
                                            <FiMinus />
                                        </button>
                                    </div>
                                    <div className="productName">
                                        <h2>{product.name}</h2>
                                    </div>
                                    <div className="quantity">
                                        <h2>{product.quantity}</h2>
                                    </div>
                                    <div className="price">
                                        <h2>
                                            R${product.quantity * product.price}
                                            ,00
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </section>
            </Content>
        </Container>
    );
};

export default ConfirmOrder;
