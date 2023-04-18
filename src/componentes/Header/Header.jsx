import React, { useState } from 'react';
import logo from "../../../images/Logo.svg"
import { Link, NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { useDataGlobally } from '../../Context/Context';
const Header = () => {

    const [toggle, SetToggle] = useState(false)

    const { user,logOut } = useDataGlobally()

    const handelSignOut=()=>{
        logOut()
        .then(result=>{})
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className="bg-slate-900  text-white flex justify-between px-5 md:px-20 items-center py-3">
            <Link to="/"><img src={logo}></img></Link>
            <div>
                <span className='md:hidden '>
                    {
                        toggle ? <IoMdClose onClick={() => SetToggle(!toggle)} /> : <FiMenu onClick={() => SetToggle(!toggle)} />
                    }
                </span>
                <ul className={`transition-all items-center duration-300  gap-4 flex bg-black p-3 opacity-75 md:bg-transparent md:flex-row flex-col absolute md:static w-full top-[10%] z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <NavLink className='mr-10 hover:text-orange-400' to='/shop' onClick={() => SetToggle(false)}>Shop</NavLink>
                    <NavLink className='mr-10 hover:text-orange-400' to='/orders' onClick={() => SetToggle(false)}>Orders </NavLink>
                    <NavLink className='mr-10 hover:text-orange-400' to='/inventory ' onClick={() => SetToggle(false)}> Inventory</NavLink>
                    <NavLink className='mr-10 hover:text-orange-400' to='/login' onClick={() => SetToggle(false)}>Login</NavLink>
                    <NavLink className='mr-10 hover:text-orange-400' to='/signUp'>SignUp</NavLink>
                    {user && <span>welcome {user.email} <button onClick={handelSignOut}>Sign Out</button></span>}
                </ul>
            </div>
        </div>
    );
};

export default Header;