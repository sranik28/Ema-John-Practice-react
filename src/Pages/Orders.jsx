import React, { useState } from 'react';
import Order from '../componentes/OrderSummary/Order';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../componentes/ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handelRemoveCart = (id) => {
        console.log(id)
        const remaining =cart.filter(product=>product.id!==id);
        setCart(remaining);
        removeFromDb(id)
    }

    return (
        <div className='card-container '>
            <div className='col-span-3'>
                <div className='mt-10'>
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handelRemoveCart={handelRemoveCart}
                        >
                        </ReviewItem>)
                    }
                </div>
            </div>
            <div className='w-[300px] h-96 bg-orange-200'>
                <Order Order={cart} />
            </div>
        </div>
    );
};

export default Orders;