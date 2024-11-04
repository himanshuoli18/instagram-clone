import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa6';
import "./ReqUserPostCard.css";

const ReqUserPostCard = () => {
  return (
    <div className="relative cursor-pointer">
      <img 
        className="w-full h-100  object-cover"
        src="/Images/TempPost.png" 
        alt="Post" 
      />
      <div className="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="overlay-text flex justify-between p-4 text-white">
          <div className="flex items-center space-x-2">
            <AiFillHeart className="text-xl" />
            <span>100</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaComment className="text-xl" />
            <span>30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqUserPostCard;
