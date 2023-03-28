import React, { useEffect, useState } from 'react';
import { addToDb } from '../../../utilities/fakedb';
import Order from '../OrderSummary/Order';
import Product from '../product/product';
const Cards = () => {
    const [card, setCard] = useState([]);

    const [shop, setShop] = useState([]); 

    useEffect(() => {
        const loadDAta = async () => {
            const res = await fetch("products.json");
            const data = await res.json();
            setCard(data)
        }
        loadDAta()
    }, [])

    const handleAddToCard = (singleData) => {
        // shop.push(singleData)
        const newProduct = [...shop, singleData];
        setShop(newProduct);
        addToDb(singleData.id)
    }

    return (
        <div className='lg:flex lg:w-[1400px] mx-auto gap-6 w-72  '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[1200px] mx-auto '>
                {
                    card.map(singleData => <Product singleData={singleData} key={singleData.id} handleAddToCard={handleAddToCard} ></Product>)
                }
            </div>
            <div className='w-[300px]    bg-orange-200 '>
                <Order Order={shop}></Order>
            </div>
        </div>
    );
};

export default Cards;




