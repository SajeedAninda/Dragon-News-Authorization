import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import RightSideTab from '../RightSideTab';
import CenterTab from '../CenterTab';
import LeftSideTab from '../LeftSideTab';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-4 space-y-10'>
                <LeftSideTab></LeftSideTab>
                <CenterTab></CenterTab>
                <RightSideTab></RightSideTab>
            </div>
        </div>
    );
};

export default Home;