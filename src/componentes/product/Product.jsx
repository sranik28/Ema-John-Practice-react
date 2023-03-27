import React from 'react';

const Product = (props) => {
    console.log(props.singleData);
    const { img , name , price , ratings , seller} = props?.singleData

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-2xl">
                <figure><img className='w-full' src={img ? img : "No Img"} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2>{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Rating:{ratings}</p>
                    <p>Manufacturer: {seller}</p>
                    <div className="card-actions justify-end ">
                        <button className="text-black btn btn-primary w-full bg-orange-200">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;