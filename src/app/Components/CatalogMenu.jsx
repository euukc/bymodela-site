import React from 'react';

export default function CatalogMenu({ categories = [], onSelectCategory }) {
    return (
        <div data-aos="fade-right" className="w-1/4 h-[750px] border-r border-gray-300 p-4">
            <ul className="space-y-2">
                {categories.map(category => (
                    <li
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className="bg-white/10 backdrop-blue-sm rounded-full p-4 cursor-pointer hover:text-[#7042ccff]"                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}
