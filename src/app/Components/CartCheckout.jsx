export default function CartCheckout({ onClose }){
    return (
        <section className={`bg-black/90 w-[900px] min-h-[600px] fixed top-[20%] right-[30%] z-[99] flex items-center justify-center transform transition-transform duration-300 rounded-xl`}>
            <span onClick={onClose} className="absolute top-0 right-9 md:mt-[20px] border-2 md:p-[5px] rounded-lg bg-white text-black cursor-pointer">Fechar</span>
        </section>
    )
}