import { useState } from 'react';
import CatalogMenu from './CatalogMenu';
import ProductList from './ProductList';
import Cart from './Cart';

export default function CatalogAll() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);


    const categories = ['TODOS', 'VAKINHAS ABERTAS', 'PACKS DE CHAVEIROS', 'PACKS DE CONTROLES', 'CHAVEIROS AVULSOS'];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const handleCartToggle = () => {
        setIsCartVisible(!isCartVisible);
    };


    return (
        <div className="relative">
            <div className="flex">
                <CatalogMenu categories={categories} onSelectCategory={handleCategorySelect} />
                <div className="w-3/4">
                    <ProductList category={selectedCategory} onAddToCart={handleAddToCart} />
                </div>
            </div>
            <button onClick={handleCartToggle} className="fixed bottom-4 right-4 bg-[#7042ccff] text-white p-4 rounded-full">
                <img src="/carrinho-compras.png" alt="Verificar o Carrinho de Compras"/>
            </button>
            <Cart isVisible={isCartVisible} onClose={handleCartToggle} cartItems={cartItems} />
        </div>
    );
}