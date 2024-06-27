import Image from "next/image";

export default function ProductItem({ name, image, price, description, onAddToCart }) {
    return (
        <div className="flex w-[40%]">
            <div className="flex flex-col justify-center items-center mb-10 border-2 rounded-xl pb-4 bg-black/60">
                <div className="h-full flex justify-end items-center">
                    <Image src={image} alt={name} width={350} height={100} />
                </div>
                <div className="flex flex-col items-center gap-2 mt-[20px] lg:px-[20px]">
                    <strong className="lg:text-[30px]">{name}</strong>
                    <p className="text-[13px] lg:text-[sm] text-center">{description}</p>
                    <p className="text-[15px] lg:text-[16px] text-green-500">{price}</p>
                    <button onClick={onAddToCart} className="bg-[#7042ccff] text-white p-2 mt-2 rounded w-[200px]">Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    );
}
