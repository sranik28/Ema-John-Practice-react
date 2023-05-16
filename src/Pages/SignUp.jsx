import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useDataGlobally } from '../Context/Context';



const SignUp = () => {

    const { createUser } = useDataGlobally()

    const [error, setError] = useState("")

    const signUpFromHandel = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm = e.target.confirm.value;
        console.log(email, password, confirm)
        setError("")
        if (password !== confirm) {
            setError("Your password did not match")
            return
        }
        else if (password.length < 6) {
            setError("Password must be 6 characters or longer")
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                setError(error.message)

            })

    }

    return (
        <div className='max-w-[1240px] mx-auto p-2'>
            <form onSubmit={signUpFromHandel} className=' text-center  my-24 border-2 border-orange-400 md:w-[30%]  mx-auto  '>
                <h1 className='my-8 font-bold text-3xl'>Sign Up</h1>
                <input className='my-5 px-8 py-2' type="email" name='email' placeholder='Your Email' required /><br />
                <input className='px-8 py-2' type="password" name='password' placeholder='Your password' /><br />
                <input className='px-8 py-2 mt-5' type="password" name='confirm' placeholder='Confirm password' required /><br />
                <p className='text-red-600 text-xl'>{error}</p>
                <button className='bg-[#FFE0B3] w-[95%] mx-auto rounded-md py-2 my-8'>Sign Up</button>

                <p className='my-5'>Already have an account?  <span className='text-[#FF9900]'>
                    <Link to="">Login</Link>
                </span>
                </p>

                <small><p className='my-5'>or</p></small>
                <button className='flex items-center gap-2 w-[95%] mx-auto rounded-md border border-slate-400 mb-5 '><FcGoogle className='w-10 h-10' />
                    <span className='text-center'>Continue with Google
                    </span>
                </button>
            </form>
        </div>
    );
};

export default SignUp;