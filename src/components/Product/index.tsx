import React from 'react';

import { FiPlus, FiMinus } from 'react-icons/fi';

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

const Product: React.FC<IProps> = ({
    product,
    handleDelete,
    handleEditFood,
}: IProps) => {
    function setEditingFood(): void {
        handleEditFood(product);
    }

    return (
        <Container>
            <header>
                <img src={product.avatar} alt={product.name} />
            </header>
            <section className="body">
                <h2>{product.name}</h2>
                <p className="price">
                    R$ <b>{product.price}</b> /KG
                </p>
                <p className="desc">{product.description}</p>
            </section>
            <section className="footer">
                <div>
                    <button type="button" className="plus">
                        <FiPlus />
                    </button>
                    <div>
                        <p>10</p>
                    </div>
                    <button type="button" className="minus">
                        <FiMinus />
                    </button>
                </div>
            </section>
        </Container>
    );
};

export default Product;
