import React from 'react';
import { FaStar, FaAngleRight, FaRegHeart, FaShare } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
const Home = () => {
    return (
        <>
            <section className='w-4/5 mx-auto mb-10'>
                <h1 className='text-5xl'>summer Art Camp! 5 Days of Artists and Painting Monet, van Gogh, Matisse, & More</h1>
                <small className='flex items-center font-medium text-gray-400'>Multi-Day Course
                    <BsQuestionCircle className='ml-2' /></small>
                <div className='grid lg:grid-cols-2 gap-4 mt-16 h-full'>
                    {/* info div */}
                    <div>
                        <p>In this 5 day class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.</p>
                        <div className='mt-4 flex items-center'>
                            <img className='rounded-full max-w-[30px] h-auto align-middle border-none' src="https://randomuser.me/api/portraits/women/81.jpg" alt="" />
                            <h5 className='ml-2 font-medium text-[#7153DB]'>Kimberly R Moseler</h5>
                        </div>
                        <div className='flex items-center mt-4'>
                            <div className='flex justify-between items-center text-[#F9C847] w-24'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <small className='ml-2 text-gray-400'>467 total review for this teacher</small>
                        </div>
                        <div className='flex items-center mt-4'>
                            <div className='flex justify-between items-center text-[#F9C847] w-24'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <small className='ml-2 text-gray-400'>5 review for this class</small>
                        </div>
                        <p className='mt-2'>Completed By 21 Learners</p>
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
                            <img className='rounded-tl-md h-[350px]' src="https://kellyjodesignsbywine.com/wp-content/uploads/2020/08/StarryNightinsta-1140x914-1.jpg" alt="" />
                        </div>
                        <div>
                            <div className='grid grid-rows-2 gap-2'>
                                <div>
                                    <img className='rounded-tr-md w-full h-[170px]' src="https://i.pinimg.com/474x/e4/a6/bf/e4a6bf2730e133f8281faddcf681ca68.jpg" alt="" />
                                </div>
                                <div>
                                    <img className='w-full h-[170px]' src="https://d3t95n9c6zzriw.cloudfront.net/homepage/hybrid-2021/hp-toptile2-hybrid-06062022-large.jpg" alt="" />
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