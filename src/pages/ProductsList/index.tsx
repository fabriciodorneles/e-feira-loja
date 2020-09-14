import React, { useState, useCallback, useEffect } from 'react';
import {
    FiPlusSquare,
    FiShoppingCart,
    FiShoppingBag,
    FiUser,
} from 'react-icons/fi';
import {
    Container,
    Header,
    HeaderContent,
    MenuBar,
    Content,
    Section,
    ProductsContainer,
} from './styles';
import logoImg from '../../assets/logo.svg';
import Product from '../../components/Product';
import api from '../../services/api';
import ModalAddFood from '../../components/ModalAddProduct';
import ModalEditProduct from '../../components/ModalEditProduct';

interface IProduct {
    id: number;
    name: string;
    avatar: string;
    price: string;
    quantity: string;
    description: string;
}

const Dashboard: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [editingProduct, setEditingProduct] = useState<IProduct>(
        {} as IProduct,
    );
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    useEffect(() => {
        async function loadProducts(): Promise<void> {
            const productsList = (await api.get<IProduct[]>('/products')).data;
            setProducts(productsList);
        }
        loadProducts();
    }, []);

    async function handleAddFood(product: Omit<IProduct, 'id'>): Promise<void> {
        try {
            const productForAdd = {
                available: true,
                name: product.name,
                avatar: product.avatar,
                description: product.description,
                price: product.price,
                quantity: product.quantity,
            };
            const newProduct = await api.post('products', productForAdd);
            if (newProduct) {
                setProducts([...products, newProduct.data]);
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function handleUpdateProduct(
        product: Omit<IProduct, 'id' | 'available'>,
    ): Promise<void> {
        await api.put(`products/${editingProduct.id}`, product);
        const newProductsList = products.map((productItem) => {
            if (productItem.id === editingProduct.id) {
                const updatedProduct = {
                    id: editingProduct.id,
                    name: product.name,
                    avatar: product.avatar,
                    description: product.description,
                    price: product.price,
                    quantity: product.quantity,
                };
                return updatedProduct;
            }
            return productItem;
        });
        setProducts(newProductsList);
    }

    const handleDeleteFood = useCallback(
        async (id: number): Promise<void> => {
            await api.delete(`products/${id}`);
            const productsList = products.filter(
                (product) => product.id !== id,
            );
            setProducts(productsList);
        },
        [products],
    );

    function toggleModal(): void {
        setModalOpen(!modalOpen);
    }

    function toggleEditModal(): void {
        setEditModalOpen(!editModalOpen);
    }

    function handleEditProduct(product: IProduct): void {
        setEditingProduct(product);
        toggleEditModal();
    }

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src={logoImg} alt="EFeira" />
                    <div className="headerRight">
                        <button type="button" className="user">
                            <FiUser />
                            <p>Login</p>
                        </button>
                        <button type="button" className="cart">
                            <FiShoppingCart />
                            <p>16 Itens</p>
                        </button>
                    </div>
                </HeaderContent>

                <MenuBar>
                    <h1>FAÇA SUA FEIRA!</h1>
                </MenuBar>
            </Header>

            <Content>
                <div className="loja">
                    <div className="products">
                        <ProductsContainer data-testid="products-list">
                            {products &&
                                products.map((product) => (
                                    <Product
                                        key={product.id}
                                        product={product}
                                        handleDelete={handleDeleteFood}
                                        handleEditFood={handleEditProduct}
                                    />
                                ))}
                        </ProductsContainer>
                    </div>
                    <div className="sidebar">Sua Bolsa</div>
                </div>
            </Content>
        </Container>
    );
};

export default Dashboard;
