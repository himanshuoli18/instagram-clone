import React from 'react';
import { TbCircleDashed } from 'react-icons/tb';

const ProfileUserDetails = () => {
  return (
    <div className='py-10'>
      <div className='flex items-start'>
        {/* Profile Picture */}
        <div className='flex-shrink-0'>
          <img 
            className='w-40 h-40 rounded-full object-cover border-2 border-gray-300' 
            src="/Images/TempProfilePic.png" 
            alt="Profile" 
          />
        </div>
        
        {/* Profile Info Section */}
        <div className='ml-10 space-y-5'>
          {/* Username and Actions */}
          <div className='flex items-center space-x-6'>
            <p className='text-2xl font-semibold'>himanshu_oli_18</p>
            <button className='px-4 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition'>
              Edit Profile
            </button>
            <TbCircleDashed className='text-2xl cursor-pointer' />
          </div>

          {/* Stats: Posts, Followers, Following */}
          <div className='flex space-x-8'>
            <div>
              <span className='font-semibold'>10</span> posts
            </div>
            <div>
              <span className='font-semibold'>300</span> followers
            </div>
            <div>
              <span className='font-semibold'>200</span> following
            </div>
          </div>

          {/* Bio Section */}
          <div>
            <p className='font-semibold text-lg'>Himanshu Oli</p>
            <p className='text-sm leading-6 text-gray-600'>
              Aiming for a style statement. 🌟 <br />
              Style is choice, not chance. 💼 <br />
              Happiness is my forever fashion. 😊 <br />
              Making waves, not following them. 🌊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetails;
