import { useState } from 'react';
import CatalogMenu from './CatalogMenu';
import ProductList from './ProductList';

export default function CatalogAll() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = ['TODOS', 'VAKINHAS ABERTAS', 'PACKS DE CHAVEIROS', 'PACKS DE CONTROLES', 'CHAVEIROS AVULSOS'];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="flex">
            <CatalogMenu categories={categories} onSelectCategory={handleCategorySelect} />
            <div className="w-[70%]">
                <ProductList category={selectedCategory} />
            </div>
        </div>
    );
}
