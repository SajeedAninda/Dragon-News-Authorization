import React, { useEffect, useState } from 'react';
import { BsBookmarkCheck } from 'react-icons/bs';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const CenterTab = () => {
    let [news, setNews] = useState([]);
    let [show, setShow] = useState(false);

    useEffect(() => {
        fetch("/news.json")
            .then(res => res.json())
            .then(data => setNews(data));
    }, [])

    let handleShow = () => {
        setShow(!show);
    }

    return (
        <div className='col-span-2'>
            <h2 className='text-xl font-bold text-center'>Dragon News Home</h2>
            {
                news.slice(0, show ? news.length : 3).map((singleNews,idx) =>
                    <div key={idx} className='mx-8 my-6'>
                        <div className='flex justify-between items-center py-4 px-4 bg-gray-100'>
                            <div className='flex gap-2'>
                                <img className='rounded-full w-[40px] h-[40px]' src={singleNews.author.img} alt="" />
                                <div>
                                    <h2 className='text-bold'>{singleNews.author.name}</h2>
                                    <h3 className='text-[#706F6F] text-sm'>{singleNews.author.published_date}</h3>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <BsBookmarkCheck></BsBookmarkCheck>
                                <AiOutlineShareAlt></AiOutlineShareAlt>
                            </div>
                        </div>

                        <div className='p-4 space-y-2'>
                            <h1 className='text-lg text-[#403F3F] font-bold'>{singleNews.title}</h1>
                            <img className='w-full rounded-lg' src={singleNews.image_url} alt="" />
                            <p className='text-sm text-[#706F6F]'>
                                {singleNews.details.length <= 200 ?
                                    singleNews.details
                                    : (
                                        <>
                                            {singleNews.details.slice(0, 200)}
                                            <span>.....</span>
                                            <Link to={`newsCategory/${singleNews._id}`} className='text-[#FF8C47] font-bold'>Read More</Link>
                                        </>
                                    )
                                }
                            </p>
                        </div>
                    </div>)


            }
            <div className='text-center pb-6'>
                <button onClick={handleShow} className='px-5 bg-green-500 rounded-lg text-white font-bold text-center py-3'>{show ? "Show Less" : "Show All"}</button>
            </div>
        </div>


    );
};

export default CenterTab;