import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IProduct {
    id: number;
    name: string;
    avatar: string;
    price: string;
    quantity: string;
    description: string;
}

interface ICreateProductData {
    name: string;
    avatar: string;
    price: string;
    quantity: string;
    description: string;
}

interface IModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddFood: (food: Omit<IProduct, 'id' | 'available'>) => void;
}

const ModalAddFood: React.FC<IModalProps> = ({
    isOpen,
    setIsOpen,
    handleAddFood,
}) => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async (data: ICreateProductData) => {
            handleAddFood(data);
            setIsOpen();
        },
        [handleAddFood, setIsOpen],
    );

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Novo Produto</h1>

                <Input
                    name="avatar"
                    placeholder="Cole um link da imagem do produto"
                />
                <Input name="name" placeholder="Nome do Produto" />
                <Input name="price" placeholder="Preço" />
                <Input name="quantity" placeholder="Quantidade em Estoque" />
                <Input
                    name="description"
                    placeholder="Alguma descrição ao Produto? (opcional)"
                />

                <button type="submit">
                    <p className="text">Adicionar</p>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    );
};

export default ModalAddFood;
