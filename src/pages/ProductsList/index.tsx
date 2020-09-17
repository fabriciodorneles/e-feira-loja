import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
    Container,
    Header,
    HeaderContent,
    MenuBar,
    Content,
    ProductsContainer,
} from './styles';
import logoImg from '../../assets/logo.svg';
import Product from '../../components/Product';
import api from '../../services/api';
import Cart from '../../components/Cart';
import { useCart } from '../../hooks/cart';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import ModalCart from '../../components/ModalCart';

interface IProduct {
    id: string;
    name: string;
    avatar: string;
    price: number;
    quantity: number;
    description: string;
}

const Dashboard: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [cartModalOpen, setCartModalOpen] = useState(false);

    const { totalItensInCart } = useCart();
    const { width } = useWindowDimensions();

    useEffect(() => {
        async function loadProducts(): Promise<void> {
            const productsList = (await api.get<IProduct[]>('/products')).data;
            setProducts(productsList);
        }
        loadProducts();
    }, []);

    function toggleCartModal(): void {
        setCartModalOpen(!cartModalOpen);
    }

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src={logoImg} alt="EFeira" />
                    <div className="headerRight">
                        <Link to="/signin" style={{ textDecoration: 'none' }}>
                            <button type="button" className="user">
                                <FiUser />
                                <p>Login</p>
                            </button>
                        </Link>
                        {totalItensInCart > 0 && window.innerWidth > 1030 ? (
                            <button type="button" className="cart">
                                <FiShoppingCart />
                                <p>{totalItensInCart} Itens</p>
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="cart"
                                onClick={() => {
                                    toggleCartModal();
                                }}
                            >
                                <FiShoppingCart />
                                <p>{totalItensInCart} Itens</p>
                            </button>
                        )}
                    </div>
                </HeaderContent>

                <MenuBar>
                    <h1>FAÇA SUA FEIRA!</h1>
                </MenuBar>
            </Header>
            <ModalCart isOpen={cartModalOpen} setIsOpen={toggleCartModal} />
            <Content>
                <div className="loja">
                    <div className="products">
                        <ProductsContainer data-testid="products-list">
                            {products &&
                                products.map((product) => (
                                    <Product
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                        </ProductsContainer>
                    </div>
                    {totalItensInCart > 0 && window.innerWidth > 1030 && (
                        <div className="sidebar">
                            <Cart />
                        </div>
                    )}
                </div>
            </Content>
        </Container>
    );
};

export default Dashboard;
