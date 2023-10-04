import React, { useContext } from 'react';
import { BiLogoGoogle } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import img1 from "../src/assets/qZone1.png"
import img2 from "../src/assets/qZone2.png"
import img3 from "../src/assets/qZone3.png"
import './right.css';
import { AuthContext } from './Authentication/AuthProvider';

const RightSideTab = () => {
    let { googleLogin } = useContext(AuthContext);
    let { githubLogin } = useContext(AuthContext);

    let handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });

    }

    let handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <div className='space-y-2'>
                <h2 className='text-lg font-bold'>Login With</h2>
                <div onClick={handleGoogleLogin} className='p-2 w-full flex items-center border-2 cursor-pointer font-semibold border-blue-400 text-blue-500 gap-2 rounded-xl'>
                    <BiLogoGoogle className='text-lg'></BiLogoGoogle>
                    <p>Login With Google</p>
                </div>
                <div onClick={handleGithubLogin} className='p-2 w-full flex items-center border-2 cursor-pointer font-semibold border-gray-700 text-gray-700 gap-2 rounded-xl'>
                    <AiFillGithub className='text-lg'></AiFillGithub>
                    <p>Login With Github</p>
                </div>
            </div>

            <div className='space-y-2 mt-10'>
                <h2 className='text-lg font-bold'>Find Us On</h2>
                <div className='p-5 w-full flex items-center border border-gray-300 text-blue-500 gap-2 rounded-md'>
                    <SiFacebook className='text-lg'></SiFacebook>
                    <p>Facebook</p>
                </div>
                <div className='p-5 w-full flex items-center border border-gray-300 text-pink-600 gap-2 rounded-md'>
                    <BsInstagram className='text-lg'></BsInstagram>
                    <p>Instagram</p>
                </div>
                <div className='p-5 w-full flex items-center border border-gray-300 text-gray-900 gap-2 rounded-md'>
                    <FaXTwitter className='text-lg'></FaXTwitter>
                    <p>Twitter</p>
                </div>
            </div>

            <h2 className='text-lg font-bold mt-10'>Q Zone</h2>
            <div className='space-y-2 mt-4 bg-gray-100 flex flex-col justify-center items-center'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>

            <div className='text-center flex justify-center mt-10  py-12 bg'>
                <div className='w-2/3 space-y-4'>
                    <h1 className='text-[30px] font-bold text-white'>Create Amazing Newspaper</h1>
                    <p className='text-white'>
                        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </p>
                    <div className='flex justify-center items-center'>
                        <button className='py-3 px-3 text-white bg-[#D72050]'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideTab;