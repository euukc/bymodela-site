import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ category, onAddToCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error loading products:', error));
    }, []);

    const filteredProducts = category && category !== 'TODOS' ? 
        products.filter(product => product.category === category) : 
        products;

    return (
        <div data-aos="fade-left" className="p-2 flex md:justify-start justify-center flex-wrap md:flex-row gap-4 w-full md:w-[1300px] mx-auto">
            {filteredProducts.map(product => (
                  <ProductItem key={product.name} {...product} onAddToCart={() => onAddToCart(product)} />
            ))}
        </div>
    );
}
