import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
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

    useEffect(() => {
        const strodeCard = getShoppingCart();
        const addCard = [];

        for (const id in strodeCard) {
            const savedProduct = card.find(product => product.id === id);
            if (savedProduct) {

                // console.log(savedProduct)
                const quantity = strodeCard[id];
                savedProduct.quantity = quantity
                // console.log(savedProduct)
                addCard.push(savedProduct)
            }
        }
        setShop(addCard)
    }, [card])

    const handleAddToCard = (singleData) => {

        let newProduct = [];

        // shop.push(singleData)
        // const newProduct = [...shop, singleData];
        const exists = card.find(pd => pd.id === singleData.id);
        if (!exists) {
            singleData.quantity = 1;
            newProduct = [...shop, singleData]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = shop.filter(pd => pd.id !== singleData.id);
            newProduct = [...remaining, exists]
        }
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
            <div className='w-[300px] h-96   bg-orange-200 '>
                <Order Order={shop}></Order>
            </div>
        </div>
    );
};

export default Cards;




