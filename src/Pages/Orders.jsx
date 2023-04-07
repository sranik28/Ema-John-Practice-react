import React, { useState } from 'react';
import Order from '../componentes/OrderSummary/Order';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../componentes/ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handelRemoveCart = (id) => {
        // console.log(id)
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    const handelClearCart = () => {
        setCart([]);
        deleteShoppingCart()
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
                <Order Order={cart}
                    handelClearCart={handelClearCart}>
                    <Link to="/checkOut">
                        <button className='btn-container'>
                            <span>Proceed Checkout</span>
                            <BsFillCalendar2CheckFill className='w-5 h-5'></BsFillCalendar2CheckFill>
                        </button>
                    </Link>
                </Order>
            </div>
        </div>
    );
};

export default Orders;