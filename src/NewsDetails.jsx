import React from 'react';
import { useNavigate, Navigate, useLoaderData, useParams } from 'react-router-dom';
import Header from './Components/Header';
import RightSideTab from './RightSideTab';

const NewsDetails = () => {
    const navigate = useNavigate();
    const newsData = useLoaderData();
    const { id } = useParams();
    const news = newsData.find(dataNews => dataNews._id === id);

    if (!news) {
        return <Navigate to="/404" />;
    }

    const { title, thumbnail_url, details, image_url } = news;

    return (
        <div className='w-[90%] mx-auto'>
            <Header></Header>
            <div className='grid grid-cols-3 gap-6'>
                <div className='col-span-2'>
                    <h2 className='text-xl font-bold text-center'>Dragon News</h2>
                    <div className='border rounded-lg border-gray-100 p-6 space-y-3'>
                        <div className='flex justify-center'>
                            <img src={image_url} alt="" />
                        </div>
                        <h1 className='text-2xl text-[#403F3F] font-bold'>{title}</h1>
                        <p className='text-base text-[#706F6F]'>{details}</p>
                        <div className='text-center pb-6'>
                            <button
                                onClick={() => navigate("/")}
                                className='px-5 bg-green-500 rounded-lg text-white font-bold text-center py-3'
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
                <RightSideTab></RightSideTab>
            </div>
        </div>
    );
};

export default NewsDetails;
