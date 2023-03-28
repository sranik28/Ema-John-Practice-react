import React from 'react';
// import { loadConfigFromFile } from 'vite';

const Order = ({ Order }) => {
    // const Order = props.Order

    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of Order) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping
    }

    const tex = totalPrice * 5 / 100;

    const grandTotal = totalPrice + totalShipping + tex

    // console.log(Order)
    return (
        <div>
            <h1 className=' font-bold text-center text-3xl my-8'>Order summary </h1>
            <p className='px-5 my-3'>Selected Items:{Order.length}</p>
            <p className='px-5 my-3'>Total Price:$ {totalPrice}</p>
            <p className='px-5 my-3'>Total Shipping:$ {totalShipping}</p>
            <p className='px-5 my-3'>Tax:& {tex.toFixed(2)}</p>
            <h1 className="text-xl font-semibold px-5 my-3">Grand Total:$ {grandTotal.toFixed(2)}</h1>
        </div>
    );
};

export default Order;