import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useDataGlobally } from '../Context/Context';

const Login = () => {

    const { singInUser } = useDataGlobally()
    const [error,setError]=useState("");

    const logInFromHandel = (e) => {
        e.preventDefault()


        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        singInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                e.target.reset()
            })
            .catch(error => {
                setError(error.message)

            })
    }

    return (
        <div className='max-w-[1240px] mx-auto p-2'>
            <form onSubmit={logInFromHandel} className=' text-center  my-24 border-2 border-orange-400 md:w-[30%]  mx-auto  '>
                <h1 className='my-8 font-bold text-3xl'>Login</h1>
                <input className='my-5 px-8 py-2' type="email" name='email' placeholder='Your Email' required /><br />
                <input className='px-8 py-2' type="password" name='password' placeholder='Your password' /><br />
                <button className='bg-[#FFE0B3] w-[95%] mx-auto rounded-md py-2 my-8'>Login</button>

                <p className='my-5'>New to Ema-john? <span className='text-[#FF9900]'>
                    <Link to="/signUp">Create New Account</Link>
                </span>
                </p>
                <p className='text-red-600 text-xl'>{error}</p>

                <small><p className='my-5'>or</p></small>
                <button className='flex items-center gap-2 w-[95%] mx-auto rounded-md border border-slate-400 mb-5 '><FcGoogle className='w-10 h-10' />
                    <span className='text-center'>Continue with Google
                    </span>
                </button>
            </form>
        </div>
    );
};

export default Login;