import React, {
    createContext,
    useState,
    useCallback,
    useContext,
    useEffect,
    useMemo,
} from 'react';

interface Product {
    id: string;
    name: string;
    avatar: string;
    price: number;
    quantity: number;
    description: string;
}

interface CartContext {
    products: Product[];
    totalItensInCart: number;
    addToCart(item: Omit<Product, 'quantity'>): void;
    increment(id: string): void;
    decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function loadProducts(): Promise<void> {
            const StorageProducts = localStorage.getItem('@EFeira:CartItems');
            if (StorageProducts) {
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
            localStorage.setItem('@EFeira:CartItems', JSON.stringify(products));
        },
        [products],
    );
    const decrement = useCallback(
        async (id) => {
            const newList = products
                .map((product) =>
                    product.id === id
                        ? { ...product, quantity: product.quantity - 1 }
                        : product,
                )
                .filter((product) => product.quantity > 0);
            setProducts(newList);
            localStorage.setItem('@EFeira:CartItems', JSON.stringify(newList));
        },
        [products],
    );

    const totalItensInCart = useMemo(() => {
        let Total = 0;

        products.map((product) => {
            Total += 1;
            return product;
        });
        return Total;
    }, [products]);

    const addToCart = useCallback(
        async (product) => {
            async function checkAndSetItem(): Promise<void> {
                const newItem = products.find((item) => item.id === product.id);
                if (newItem) {
                    increment(newItem.id);
                    console.log('item existente');
                } else {
                    const newproduct = product;
                    newproduct.quantity = 1;
                    const newList = [...products, newproduct];
                    await setProducts(newList);
                    // increment(product.id);
                    localStorage.setItem(
                        '@EFeira:CartItems',
                        JSON.stringify(newList),
                    );
                }
            }

            await checkAndSetItem();
            console.log(products);
        },
        [products, increment],
    );

    const value = React.useMemo(
        () => ({ addToCart, increment, decrement, products, totalItensInCart }),
        [products, addToCart, increment, decrement, totalItensInCart],
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
