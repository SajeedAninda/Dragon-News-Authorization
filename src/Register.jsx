import React from 'react';
import Navbar from './Components/Navbar';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bg-gray-100 h-screen'>
            <div className='w-[90%] mx-auto'>
                <Navbar></Navbar>
                <div className='flex justify-center h-[50%] items-center'>
                    <div className='bg-white w-2/3 space-y-5 px-20 py-20 rounded-md'>
                        <h1 className='text-[#403F3F] text-3xl font-bold text-center'>Register your Account</h1>
                        <div>
                            <form className=' space-y-6'>
                                <div className='flex flex-col gap-2 justify-center items-center'>
                                    <label className='text-[#403F3F] text-lg font-bold' id='name'>Your Name</label>
                                    <input className='bg-gray-100 px-4 py-2 w-1/2 rounded-lg' type="text" name="name" id="name" placeholder='Your Full Name' />
                                </div>
                                <div className='flex flex-col gap-2 justify-center items-center'>
                                    <label className='text-[#403F3F] text-lg font-bold' id='email'>Email Address</label>
                                    <input className='bg-gray-100 px-4 py-2 w-1/2 rounded-lg' type="email" name="email" id="email" placeholder='Enter Your Email Address' />
                                </div>
                                <div className='flex flex-col gap-2 justify-center items-center'>
                                    <label className='text-[#403F3F] text-lg font-bold' l id='password'>Password</label>
                                    <input className='bg-gray-100 px-4 py-2 w-1/2 rounded-lg' type="password" name="password" id="password" placeholder='Enter Your Password' />
                                </div>
                                <div className='flex justify-center'>
                                    <button className='bg-[#403F3F] text-white font-bold rounded-lg py-3 w-1/2' type='submit'>
                                        Register
                                    </button>
                                </div>
                            </form>
                            <div className='flex justify-center'>
                                <h2 className='text-[#403F3F] mt-4'>Have an account? <Link className='text-[#F75B5F] font-semibold' to={"/login"}>Login</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;