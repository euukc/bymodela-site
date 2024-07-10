import React from 'react';

export default function CatalogMenu({ categories = [], onSelectCategory }) {
    return (
        <div data-aos="fade-right" className="w-full md:w-1/4 flex md:flex-col h-[120px] md:h-[750px] md:border-r border-gray-300 p-[5px] md:p-4 overflow-x-hidden">
            <ul className="md:space-y-2 flex flex-wrap justify-around items-center">
                {categories.map(category => (
                    <li
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className="bg-white/10 text-center backdrop-blue-sm border-2 md:border-0 rounded-full p-[20px] cursor-pointer hover:text-[#7042ccff] md:w-full w-[100px] h-[20px] md:text-[16px] text-[10px] flex items-center justify-center">
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}
