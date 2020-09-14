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

interface IModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleUpdateProduct: (product: Omit<IProduct, 'id'>) => void;
    editingProduct: IProduct;
}

interface IEditProductData {
    name: string;
    avatar: string;
    price: string;
    quantity: string;
    description: string;
}

const ModalEditProduct: React.FC<IModalProps> = ({
    isOpen,
    setIsOpen,
    editingProduct,
    handleUpdateProduct,
}) => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async (data: IEditProductData) => {
            handleUpdateProduct(data);
            setIsOpen();
        },
        [handleUpdateProduct, setIsOpen],
    );

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form
                ref={formRef}
                onSubmit={handleSubmit}
                initialData={editingProduct}
            >
                <h1>Editar Produto</h1>
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
                    <div className="text">Editar Produto</div>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    );
};

export default ModalEditProduct;
