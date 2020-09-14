import React, {
    createContext,
    useState,
    useCallback,
    useContext,
    useEffect,
} from 'react';

interface Product {
    id: string;
    title: string;
    avatar: string;
    price: number;
    quantity: number;
}

interface CartContext {
    products: Product[];
    addToCart(item: Omit<Product, 'quantity'>): void;
    increment(id: string): void;
    decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function loadProducts(): Promise<void> {
            const StorageProducts = localStorage.getItem(
                '@GoMarkerPlace:CartItems',
            );
            if (StorageProducts) {
                console.log(StorageProducts);
                setProducts([...JSON.parse(StorageProducts)]);
            }
        }

        loadProducts();
    }, []);

    const increment = useCallback(
        async (id) => {
            setProducts(
                products.map((product) =>
                    product.id === id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product,
                ),
            );
            console.log(products);
            localStorage.setItem(
                '@GoMarkerPlace:CartItems',
                JSON.stringify(products),
            );
        },
        [products],
    );

    const addToCart = useCallback(
        async (product) => {
            const newItem = products.find((item) => item.id === product.id);
            if (newItem) {
                increment(newItem.id);
                console.log('item existente');
            } else {
                const newproduct = product;
                newproduct.quantity = 1;
                setProducts([...products, newproduct]);
                console.log('novo item');
            }
            localStorage.setItem(
                '@GoMarkerPlace:CartItems',
                JSON.stringify(products),
            );
        },
        [products, increment],
    );

    const decrement = useCallback(
        async (id) => {
            setProducts(
                products.map((product) =>
                    product.id === id
                        ? { ...product, quantity: product.quantity - 1 }
                        : product,
                ),
            );
            console.log(products);
            localStorage.setItem('@Efeira:CartItems', JSON.stringify(products));
        },
        [products],
    );

    const value = React.useMemo(
        () => ({ addToCart, increment, decrement, products }),
        [products, addToCart, increment, decrement],
    );

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

function useCart(): CartContext {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(`useCart must be used within a CartProvider`);
    }

    return context;
}

export { CartProvider, useCart };
