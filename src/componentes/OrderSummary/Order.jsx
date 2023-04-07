import React from 'react';
// import { loadConfigFromFile } from 'vite';
import { AiOutlineDelete } from 'react-icons/ai';

const Order = ({ Order, handelClearCart, children }) => {
    // const Order = props.Order

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of Order) {

        product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity;
    }

    const tex = totalPrice * 5 / 100;

    const grandTotal = totalPrice + totalShipping + tex

    // console.log(Order)
    return (
        <div>
            <h1 className=' font-bold text-center text-3xl my-8'>Order summary </h1>
            <p className='px-5 my-3'>Selected Items:{quantity}</p>
            <p className='px-5 my-3'>Total Price:$ {totalPrice}</p>
            <p className='px-5 my-3'>Total Shipping:$ {totalShipping}</p>
            <p className='px-5 my-3'>Tax:$ {tex.toFixed(2)}</p>
            <h1 className="text-xl font-semibold px-5 my-3">Grand Total:$ {grandTotal.toFixed(2)}</h1>
            <button onClick={handelClearCart} className='flex justify-between w-[95%] items-center bg-red-400 p-2 rounded mx-auto'>
                <span>clear cart</span>
                <AiOutlineDelete className='h-6 w-6'></AiOutlineDelete>
            </button>
            {children}
        </div>
    );
};

export default Order;