import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, "EEEE, MMMM d, yyyy");

    return (
        <div className='flex flex-col justify-center items-center my-6 space-y-2'>
            <img className='w-[350px]' src={logo} alt="" />
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <h4>{formattedDate}</h4>
        </div>
    );
};

export default Header;