import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ category }) {
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
        <div className="p-2 flex flex-wrap gap-4 ml-[30px]">
            {filteredProducts.map(product => (
                <ProductItem key={product.name} {...product} />
            ))}
        </div>
    );
}
