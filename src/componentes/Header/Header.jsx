import React from 'react';
import logo from "../../../images/Logo.svg"
const Header = () => {
    return (
        <div className="bg-slate-900 text-white flex justify-between px-20 items-center py-3">
            <img src={logo}></img>
            <div>
                <a className='mr-10 hover:text-orange-400' href='/order'>Order</a>
                <a className='mr-10 hover:text-orange-400' href='/order Review'>Order Review</a>
                <a className='mr-10 hover:text-orange-400' href='/manage Inventory'>Manage Inventory</a>
                <a className='mr-10 hover:text-orange-400' href='/login'>Login</a>
            </div>
        </div>
    );
};

export default Header;