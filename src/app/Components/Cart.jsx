import React from 'react';

export default function Cart({ isVisible, onClose, cartItems }) {
    return (
        <aside className={`bg-black/60 w-[300px] h-full fixed top-0 right-0 z-[99] flex items-center justify-center transform ${isVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
            <div className="bg-white p-5 rounded-md min-w-[70%] md:min-w-[200px] md:h-min-screen flex-wrap">
                <h2 className="text-center font-bold text-2x1 mb-12 text-black">Meu carrinho</h2>

                <div className="flex justify-between mb-2 flex-col">
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div key={index} className="flex justify-between mb-2">
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>O carrinho está vazio</p>
                    )}
                </div>
                <p className="font-bold text-black">Total: <span>{cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2)}</span></p>

                <div className="flex items-center justify-around mt-5 w-full flex-wrap">
                    <button onClick={onClose} className="text-black">Voltar</button>
                    <button className="bg-[#7042ccff] text-white px-4 py-1 rounded">Finalizar pedido</button>
                </div>
            </div>
        </aside>
    );
}
