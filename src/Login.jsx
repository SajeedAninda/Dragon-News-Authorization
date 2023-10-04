import React, { useContext, useState } from 'react';
import Navbar from './Components/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './Authentication/AuthProvider';
import SocialLogin from './SocialLogin';

const Login = () => {
    let [errormsg, seterrormsg] = useState("");
    let { login } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    console.log("Location in Login Page", location);

    let handleLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        login(email, password)
            .then((userCredential) => {
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                seterrormsg(error.message);
            });
    }


    return (
        <div className='bg-gray-100 h-fit'>
            <div className='w-[90%] mx-auto'>
                <Navbar></Navbar>
                <div className='flex justify-center h-[50%] items-center'>
                    <div className='bg-white w-2/3 space-y-5 px-20 py-20 rounded-md'>
                        <h1 className='text-[#403F3F] text-3xl font-bold text-center'>Login to your Account</h1>
                        <div>
                            <form onSubmit={handleLogin} className=' space-y-6'>
                                <div className='flex flex-col gap-2 justify-center items-center'>
                                    <label className='text-[#403F3F] text-lg font-bold' id='email'>Email Address</label>
                                    <input className='bg-gray-100 px-4 py-2 w-1/2 rounded-lg' type="email" name="email" required id="email" placeholder='Enter Your Email Address' />
                                </div>
                                <div className='flex flex-col gap-2 justify-center items-center'>
                                    <label className='text-[#403F3F] text-lg font-bold' l id='email'>Password</label>
                                    <input className='bg-gray-100 px-4 py-2 w-1/2 rounded-lg' type="password" name="password" required id="password" placeholder='Enter Your Password' />
                                </div>
                                <div className='flex justify-center'>
                                    <button className='bg-[#403F3F] text-white font-bold rounded-lg py-3 w-1/2' type='submit'>
                                        Login
                                    </button>
                                </div>
                                <div className='flex justify-center'>
                                    <p className='text-red-500'>{errormsg}</p>
                                </div>
                            </form>
                            <div className='flex justify-center'>
                                <h2 className='text-[#403F3F] mt-4'>Dont't have an account? <Link className='text-[#F75B5F] font-semibold' to={"/register"}>Register</Link></h2>
                            </div>
                            <div className='flex justify-center pt-3 items-center'>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;