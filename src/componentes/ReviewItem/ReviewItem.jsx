import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
const ReviewItem = ({ product,handelRemoveCart }) => {
    const { id, img, name, quantity, price } = product
    return (
        <div className='mb-10 w-full border-2 border-[#95A0A7] h-28 flex'>
            <img className='w-24' src={img} alt="" />
            <div className='w-full px-4 flex justify-between items-center   '>
                <div>
                    <h1 className='font-semibold text-xl'>{name}</h1>
                    <p className='m-2'>Price:<span className='text-[#FF9900]'>${price}</span></p>
                    <p className='m-2'>Quantity:<span>{quantity}</span></p>
                </div>
                <button onClick={()=>handelRemoveCart(id)} className='mr-0 text-[#cb2c2c] text-2xl bg-[#da42424c] rounded-full h-10 w-10 opacity-60 flex justify-center items-center '><AiOutlineDelete></AiOutlineDelete> </button>
            </div>
        </div>
    );
};

export default ReviewItem;