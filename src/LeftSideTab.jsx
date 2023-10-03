import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import first from "../src/assets/1.png";
import second from "../src/assets/2.png";
import third from "../src/assets/3.png";
import { format } from 'date-fns';
import { AiOutlineCalendar } from 'react-icons/ai';



const LeftSideTab = () => {
    let [categories, setCategories] = useState([]);
    const currentDate = new Date();
    const formattedDate = format(currentDate, "MMMM d");

    useEffect(() => {
        fetch("/categories.json")
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div>
            <div className='space-y-2 mt-10'>
                <h2 className='text-xl font-bold'>All Category</h2>
                {
                    categories.map(category => <Link to={`category/category-${category.id}`} className='flex flex-col text-center text-lg text-[#9F9F9F] font-semibold' key={category.id}><p className='my-3 bg-gray-100 rounded-xl py-3'>{category.name}</p></Link>)
                }
            </div>

            <div className='mt-10'>
                <div className='space-y-2'>
                    <img className='w-full rounded-lg' src={first} alt="" />
                    <h3 className='text-[#403F3F] text-lg font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className='flex justify-between'>
                        <h5>Sports</h5>
                        <div className='flex justify-center items-center gap-2'>
                            <AiOutlineCalendar className='text-lg'></AiOutlineCalendar>
                            <h5>{formattedDate}</h5>
                        </div>
                    </div>
                </div>

                <div className='space-y-2 mt-6'>
                    <img className='w-full rounded-lg' src={second} alt="" />
                    <h3 className='text-[#403F3F] text-lg font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className='flex justify-between'>
                        <h5>Sports</h5>
                        <div className='flex justify-center items-center gap-2'>
                            <AiOutlineCalendar className='text-lg'></AiOutlineCalendar>
                            <h5>{formattedDate}</h5>
                        </div>
                    </div>
                </div>

                <div className='space-y-2 mt-6'>
                    <img className='w-full rounded-lg' src={third} alt="" />
                    <h3 className='text-[#403F3F] text-lg font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className='flex justify-between'>
                        <h5>Sports</h5>
                        <div className='flex justify-center items-center gap-2'>
                            <AiOutlineCalendar className='text-lg'></AiOutlineCalendar>
                            <h5>{formattedDate}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideTab;