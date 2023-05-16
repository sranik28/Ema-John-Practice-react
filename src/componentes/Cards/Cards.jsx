import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import Order from '../OrderSummary/Order';
import Product from '../product/product';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link, useLoaderData } from 'react-router-dom';
import { BsListNested } from 'react-icons/bs';
const Cards = () => {
    const [card, setCard] = useState([]);
    const [shop, setShop] = useState([]);
    const [currentPage, setCurrentPages] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);


    const { totalProducts } = useLoaderData();
    console.log(totalProducts)

    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    const pageNumber = [...Array(totalPages).keys()];


    // useEffect(() => {
    //     const loadDAta = async () => {
    //         const res = await fetch("http://localhost:5000/products");
    //         const data = await res.json();
    //         setCard(data)
    //     }
    //     loadDAta()
    // }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`);

            const data = await response.json();
            setCard(data);
        }
        fetchData();
    }, [currentPage, itemsPerPage]);

    useEffect(() => {
        const strodeCard = getShoppingCart();
        const addCard = [];

        for (const id in strodeCard) {
            const savedProduct = card.find(product => product._id === id);
            if (savedProduct) {

                // console.log(savedProduct)
                const quantity = strodeCard[id];
                savedProduct.quantity = quantity
                // console.log(savedProduct)
                addCard.push(savedProduct)
            }
        }
        setShop(addCard)
    }, [card]);

    const handleAddToCard = (singleData) => {

        let newProduct = [];

        // shop.push(singleData)
        // const newProduct = [...shop, singleData];
        const exists = card.find(pd => pd._id === singleData._id);
        if (!exists) {
            singleData.quantity = 1;
            newProduct = [...shop, singleData]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = shop.filter(pd => pd._id !== singleData._id);
            newProduct = [...remaining, exists]
        }
        setShop(newProduct);
        addToDb(singleData._id)
    }
    const handelClearCart = () => {
        setShop([]);
        deleteShoppingCart()
    }

    const options = [5, 10, 15, 20];
    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }

    return (
        <>
            <div className=' card-container  '>
                <div className='col-span-3'>
                    <div className='grid md:grid-cols-3 gap-4'>
                        {
                            card.map(singleData => <Product singleData={singleData} key={singleData._id} handleAddToCard={handleAddToCard} ></Product>)
                        }
                    </div>
                </div>
                <div className='w-[300px] h-96 mt-2 sticky top-20 bg-orange-200 '>
                    <Order Order={shop}
                        handelClearCart={handelClearCart}>
                        <Link to="/orders">
                            <button className='btn-container'>
                                <span>Review Order</span>
                                <AiOutlineArrowRight className='w-6 h-6'></AiOutlineArrowRight>
                            </button>
                        </Link>
                    </Order>
                </div>
            </div>
            <div className='flex gap-8 justify-center my-12 '>

                {
                    pageNumber.map(number =>
                        <button key={number}
                            className={currentPage === number ? "selected" : ''}
                            onClick={() => setCurrentPages(number)}
                        >{number}
                        </button>)
                }
                <select value={itemsPerPage} onChange={handleSelectChange}>
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Cards;




