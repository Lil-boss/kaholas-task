import React, { useEffect, useState } from 'react';
import { FaStar, FaAngleRight, FaRegHeart, FaShare } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
const Home = () => {
    const [info, setInfo] = useState({});
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setInfo(data))
    }, []);
    const { name, profileImg, BlogTitle, desc, teacherReview, classReview, courseComplete, art1, art2, art3 } = info;
    return (
        <>
            <section className='w-4/5 mx-auto mb-10'>
                <h1 className='text-5xl'>{BlogTitle}</h1>
                <small className='flex items-center font-medium text-gray-400'>Multi-Day Course
                    <BsQuestionCircle className='ml-2' /></small>
                <div className='grid lg:grid-cols-2 gap-4 mt-16 h-full'>
                    {/* info div */}
                    <div>
                        <p>{desc}</p>
                        <div className='mt-4 flex items-center'>
                            <img className='rounded-full max-w-[30px] h-auto align-middle border-none' src={profileImg} alt="" />
                            <h5 className='ml-2 font-medium text-[#7153DB]'>{name}</h5>
                        </div>
                        <div className='flex items-center mt-4'>
                            <div className='flex justify-between items-center text-[#F9C847] w-24'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <small className='ml-2 text-gray-400'>{teacherReview} total review for this teacher</small>
                        </div>
                        <div className='flex items-center mt-4'>
                            <div className='flex justify-between items-center text-[#F9C847] w-24'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <small className='ml-2 text-gray-400'>{classReview} review for this class</small>
                        </div>
                        <p className='mt-2'>Completed By {courseComplete} Learners</p>
                        <div className='mt-10 grid lg:grid-cols-2 gap-2'>
                            <div>
                                <button className='flex items-center rounded-full bg-[#503DD4] px-6 py-2 text-white'>See Class Schedule <FaAngleRight /></button>
                            </div>
                            <div className='flex items-center'>
                                <p className='flex items-center text-[#503DD4]'><FaRegHeart className='mr-2' /> Save</p>
                                <p className='flex items-center text-[#503DD4] ml-8'><FaShare className='mr-2' /> Share</p>
                            </div>
                        </div>
                    </div>
                    {/* img div */}
                    <div className='grid lg:grid-cols-2 gap-2'>
                        <div>
                            <img className='rounded-tl-md h-[350px]' src={art1} alt="" />
                        </div>
                        <div>
                            <div className='grid grid-rows-2 gap-2'>
                                <div>
                                    <img className='rounded-tr-md w-full h-[170px]' src={art2} alt="" />
                                </div>
                                <div>
                                    <img className='w-full h-[170px]' src={art3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;