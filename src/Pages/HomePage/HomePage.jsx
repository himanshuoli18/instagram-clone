import React, { useRef } from 'react';
import StoryCircle from '../../Components/HomePage/Story/StoryCircle';
import RightSideBar from '../../Components/HomePage/RightSideBar/RightSideBar';
import PostCard from '../../Components/HomePage/Posts/PostCard';
import './HomePage.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const HomePage = () => {
    const storyRef = useRef(null);

    const scrollLeft = () => {
        storyRef.current.scrollBy({ left: -300, behavior: 'smooth' }); 
    };

    const scrollRight = () => {
        storyRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div>
            <div className='mt-10 flex w-full justify-center'>
                <div className='w-[50%] px-10 relative'>
                    
                    {/* Story Circle Section */}
                    <div className='relative flex items-center'>
                        {/* Left Arrow */}
                        <button 
                            className='absolute -left-5 z-10 bg-white shadow-md p-2 rounded-full opacity-70'
                            onClick={scrollLeft}
                        >
                            <IoIosArrowBack size={15} />
                        </button>

                        <div
                            className='storyDiv flex space-x-2 p-4 rounded-md border justify-start w-full overflow-x-auto scrollbar-hide'
                            ref={storyRef}
                        >
                            <div className="flex space-x-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
                                    <StoryCircle key={index} />
                                ))}
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <button 
                            className='absolute -right-5 z-10 bg-white shadow-md p-2 rounded-full opacity-70'
                            onClick={scrollRight}
                        >
                            <IoIosArrowForward size={15} />
                        </button>
                    </div>

                    {/* PostCard Section */}
                    <div className='space-y-10 w-full mt-10'>
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <PostCard key={index} />
                        ))}
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className='w-[30%]'>
                    <RightSideBar />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
