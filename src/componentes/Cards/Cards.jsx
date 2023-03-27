import React, { useEffect, useState } from 'react';
import Product from '../product/product';
const Cards = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        const loadDAta = async () => {
            const res = await fetch("../../../fakeData/products.json");
            const data = await res.json();
            setCard(data)
        }
        loadDAta()
    }, [])
    return (
        <div className='flex w-[1400px] mx-auto gap-6 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[1200px] mx-auto '>
                {
                    card.map(singleData => <Product singleData={singleData} key={singleData.id}></Product>)
                }

            </div>
            <div className='w-[300px] text-center bg-orange-200 '>
                <h1 className='font-bold text-3xl my-8'>Oder Summary</h1>
            </div>
        </div>
    );
};

export default Cards;