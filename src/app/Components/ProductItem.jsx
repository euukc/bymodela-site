import Image from "next/image"

export default function ProductItem({ name, image, price, description }) {
    return (
        <div className="flex flex-col w-[40%] border-2 rounded-lg">
            <div className="flex flex-col justify-center items-center w-full pb-2 flex-wrap">
                <div className="w-[40% h-full flex justify-end items-center">
                    <Image src={image} alt={name} width={100} height={100} />
                </div>
                <div className="flex flex-col gap-2 w-[60%]">
                    <strong className="text-[20px]">{name}</strong>
                    <p className="text-[13px] lg:text-sm">{description}</p>
                    <p className="text-[15px] lg:text-[16px]">{price}</p>
                    <p className="border-2-[#7042ccff] rounded-[100px] text-center text-[13px] bg-[#7042ccff] p-2 cursor-pointer">Adicionar no carrinho</p>
                </div>
            </div>
        </div>
    );
}
