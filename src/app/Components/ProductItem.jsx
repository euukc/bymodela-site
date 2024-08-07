import Image from "next/image";
import { useState } from "react";

export default function ProductItem({ name, image, price, description, onAddToCart }) {   
    const [isAddToCart, setIsAddToCart] = useState(false);

    const cartAdded = () => {
        onAddToCart(); 
        setIsAddToCart(true);
        setTimeout(() => setIsAddToCart(false), 2000);
    };

    
    return (
        <div className="wx-auto md:w-[30%] w-[320px] p-2 flex items-center">
            <div className="flex flex-col justify-center items-center mb-10 border-2-0 rounded-xl pb-4 bg-black/60">
                <div className="h-full flex justify-end items-center">
                    <Image className="md:w-[400px] w-[300px] h-[300px] md:h-[350px] rounded-lg" src={image} alt={name} width={450} height={90}/>
                </div>
                <div className="flex flex-col items-center mt-[20px]">
                    <strong className="lg:text-[23px] text-center">{name}</strong>
                    <p className="text-[13px] lg:text-[sm] text-center">{description}</p>
                    <p className="text-[15px] lg:text-[16px] text-green-500">{price}</p>
                    <button 
                        onClick={cartAdded} 
                        className={`bg-[#7042ccff] text-white p-2 mt-2 rounded w-[200px] ${isAddToCart ? 'bg-green-500' : ''}`}
                    >
                        {isAddToCart ? 'Adicionado' : 'Adicionar ao Carrinho'}
                    </button>
                </div>
            </div>
        </div>
    );
}
