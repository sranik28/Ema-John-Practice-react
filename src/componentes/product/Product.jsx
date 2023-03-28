import React from 'react';

const Product = (props) => {
    // console.log(props.singleData);
    const { img, name, price, ratings, seller } = props?.singleData;

    const handleAddToCard = props.handleAddToCard;
    
    // props.handleAddToCard

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-2xl">
                <figure><img className='w-full' src={img ? img : "No Img"} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="text-lg font-semibold ">Price: ${price}</p>
                    <p className="text-lg font-semibold ">Rating :{ratings}</p>
                    <p className="text-lg font-semibold ">Manufacturer: {seller}</p>
                    <div className="card-actions justify-end ">

                        {/* add to card btn */}

                        <button onClick={() => handleAddToCard(props.singleData)} className="text-black btn btn-primary w-full bg-orange-200">Add to Card &nbsp;&nbsp;&nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;