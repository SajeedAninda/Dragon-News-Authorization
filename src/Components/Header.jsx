import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center my-6'>
            <img className='w-[350px]' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <h4>Sunday, November 27, 2022</h4>
        </div>
    );
};

export default Header;