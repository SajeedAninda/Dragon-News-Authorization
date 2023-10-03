import React from 'react';
import { BiLogoGoogle } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import img1 from "../src/assets/qZone1.png"
import img2 from "../src/assets/qZone2.png"
import img3 from "../src/assets/qZone3.png"


const RightSideTab = () => {
    return (
        <div>
            <div className='space-y-2'>
                <h2 className='text-lg font-bold'>Login With</h2>
                <div className='p-2 w-full flex items-center border-2 font-semibold border-blue-400 text-blue-500 gap-2 rounded-xl'>
                    <BiLogoGoogle className='text-lg'></BiLogoGoogle>
                    <p>Login With Google</p>
                </div>
                <div className='p-2 w-full flex items-center border-2 font-semibold border-gray-700 text-gray-700 gap-2 rounded-xl'>
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
        </div>
    );
};

export default RightSideTab;