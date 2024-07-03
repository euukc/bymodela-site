import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Cart({ isVisible, onClose, cartItems, onRemoveFromCart }) {
    return (
        <aside className={`bg-black/60 w-[300px] h-full fixed top-0 right-0 z-[99] flex items-center justify-center transform ${isVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
            <div className="bg-white p-5 rounded-md min-w-[70%] md:min-w-[200px] md:h-min-screen flex-wrap">
                <h2 className="text-center font-bold text-2x1 mb-12 text-black">Meu carrinho</h2>

                <div className="flex justify-between mb-2 flex-col">
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div key={index} className="flex justify-between mb-2 text-black gap-4">
                                <p className='text-[#7042ccff]'>{item.name}</p>
                                <p>{item.price}</p>
                                <button onClick={() => onRemoveFromCart(index)} className="text-red-500 ml-2">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className='text-red-500 text-center'>O carrinho está vazio</p>
                    )}
                </div>
                <p className="font-bold text-black">Total: <span>R${cartItems.reduce((total, item) => total + parseFloat(item.price.replace('R$', '').replace(',', '.'). trim()), 0).toFixed(2)}</span></p>

                <div className="flex items-center justify-around md:mt-[100px] mt-5 w-full flex-wrap flex-col md:gap-4">
                    <button onClick={onClose} className="text-black">Voltar</button>
                    <button className="bg-[#7042ccff] text-white px-4 py-1 rounded">Finalizar pedido</button>
                </div>
            </div>
        </aside>
    );
}
