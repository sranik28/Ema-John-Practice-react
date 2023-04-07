import React from 'react';
import logo from "../../../images/Logo.svg"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="bg-slate-900  text-white flex justify-between px-20 items-center py-3">
            <Link to="/"><img src={logo}></img></Link>
            <div>
                    <Link className='mr-10 hover:text-orange-400'to='/shop'>Shop</Link>
                    <Link className='mr-10 hover:text-orange-400'to='/Orders'>Orders </Link>
                    <Link className='mr-10 hover:text-orange-400'to='/Inventory '> Inventory</Link>
                    <Link className='mr-10 hover:text-orange-400'to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;