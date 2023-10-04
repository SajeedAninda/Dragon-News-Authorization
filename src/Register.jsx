import React, { useContext } from 'react';
import Navbar from './Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Authentication/AuthProvider';

const Register = () => {
    let { register } = useContext(AuthContext);
    let navigate = useNavigate();

    let handleRegister = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        register(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
            });
    }

    return (
        <div className='bg-gray-100 h-full'>
            <div className='w-[90%] mx-auto'>
                <Navbar></Navbar>
                <div className='flex justify-center h-[50%] items-center'>
                    <div className='bg-white w-[80%] md:w-2/3 space-y-5 px-4 py-4 lg:px-20 lg:py-20 rounded-md'>
                        <h1 className='text-[#403F3F] text-3xl font-bold text-center'>Register your Account</h1>
                        <>
                            <form onSubmit={handleRegister} className=' space-y-6'>
                                <div className='flex flex-col gap-2 justify-center items-center'>
                                    <label className='text-[#403F3F] text-lg font-bold' id='name'>Your Name</label>
                                    <input className='bg-gray-100 px-4 py-2 w-full md:w-2/3 lg:1/2 rounded-lg' type="text" name="name" id="name" placeholder='Your Full Name' />
                                </div>
                                <div className='flex flex-col gap-2 justify-center items-center'>
                                    <label className='text-[#403F3F] text-lg font-bold' id='email'>Email Address</label>
                                    <input className='bg-gray-100 px-4 py-2 w-full md:w-2/3 lg:1/2 rounded-lg' type="email" required name="email" id="email" placeholder='Enter Your Email Address' />
                                </div>
                                <div className='flex flex-col gap-2 justify-center items-center'>
                                    <label className='text-[#403F3F] text-lg font-bold' l id='password'>Password</label>
                                    <input className='bg-gray-100 px-4 py-2 w-full md:w-2/3 lg:1/2 rounded-lg' type="password" required name="password" id="password" placeholder='Enter Your Password' />
                                </div>
                                <div className='flex justify-center'>
                                    <button className='bg-[#403F3F] text-white font-bold rounded-lg py-3 w-full md:w-2/3 lg:1/2' type='submit'>
                                        Register
                                    </button>
                                </div>
                            </form>
                            <div className='flex justify-center'>
                                <h2 className='text-[#403F3F] mt-4'>Have an account? <Link className='text-[#F75B5F] font-semibold' to={"/login"}>Login</Link></h2>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;