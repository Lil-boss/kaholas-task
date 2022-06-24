import React from 'react';
import { FaStar, FaAngleRight, FaRegHeart, FaShare } from "react-icons/fa";
const Home = () => {
    return (
        <>
            <div className='w-4/5 mx-auto'>
                <h1 className='text-5xl'>summer Art Camp! 5 Days of Artists and Painting Monet, van Gogh, Matisse, & More</h1>
                <small className='flex items-center font-medium text-gray-400'>Multi-Day Course <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg></small>
                <div className='grid grid-cols-2 gap-4 mt-16'>
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
                        <div className='mt-10 flex items-center'>
                            <button className='flex items-center rounded-full bg-[#503DD4] px-6 py-2 text-white'>See Class Schedule <FaAngleRight /></button>
                            <p className='flex items-center text-[#503DD4] ml-8'><FaRegHeart className='mr-2' /> Save</p>
                            <p className='flex items-center text-[#503DD4] ml-8'><FaShare className='mr-2 ' /> Share</p>
                        </div>
                    </div>
                    {/* img div */}
                    <div></div>
                </div>
            </div>

        </>
    );
};

export default Home;