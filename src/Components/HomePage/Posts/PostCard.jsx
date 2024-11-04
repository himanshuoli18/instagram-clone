import React, { useState } from 'react';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa6';
import { RiSendPlaneLine } from 'react-icons/ri';
import "./PostCard.css";
import CommentsModel from '../Comments/CommentsModel';
import { useDisclosure } from '@chakra-ui/react'

const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const {isOpen, onOpen, onClose } = useDisclosure()

  const toggleDropDown = () => setShowDropDown(prev => !prev);
  const toggleLike = () => setIsPostLiked(prev => !prev);
  const toggleSave = () => setIsSaved(prev => !prev);
  const toggleCommentModel = () => onOpen()

  return (
    <div className="border rounded-md w-full">
      {/* Header */}
      <div className="flex justify-between items-center w-full py-4 px-5">
        <div className="flex items-center">
          <img 
            className="h-12 w-12 rounded-full"
            src="/Images/TempProfilePic.png" 
            alt="Profile"
          />
          <div className="pl-2">
            <p className="font-semibold text-sm">himanshu_oli_18</p>
            <p className="font-thin text-sm">Chandigarh</p>
          </div>
        </div>
        {/* Dropdown */}
        <div className="relative">
          <BsThreeDots className="dots cursor-pointer" onClick={toggleDropDown} />
          {showDropDown && (
            <div className="absolute right-0 bg-red-600 text-white py-1 px-4 rounded-md cursor-pointer">
              Delete
            </div>
          )}
        </div>
      </div>

      {/* Post Image */}
      <div className="w-full">
        <img className="w-full" src="/Images/TempPost.png" alt="Post" />
      </div>

      {/* Interaction Icons */}
      <div className="flex justify-between items-center w-full px-5 pt-3">
        <div className="flex items-center space-x-2">
          {isPostLiked ? (
            <AiFillHeart
              className="text-red-600 text-2xl hover:opacity-50 cursor-pointer"
              onClick={toggleLike}
            />
          ) : (
            <AiOutlineHeart
              className="text-2xl hover:opacity-50 cursor-pointer"
              onClick={toggleLike}
            />
          )}
          <FaRegComment onClick={toggleCommentModel} className="text-xl hover:opacity-50 cursor-pointer" />
          <RiSendPlaneLine className="text-2xl hover:opacity-50 cursor-pointer" />
        </div>
        <div>
          {isSaved ? (
            <BsBookmarkFill
              className="text-xl hover:opacity-50 cursor-pointer"
              onClick={toggleSave}
            />
          ) : (
            <BsBookmark
              className="text-xl hover:opacity-50 cursor-pointer"
              onClick={toggleSave}
            />
          )}
        </div>
      </div>

      {/* Post Details */}
      <div className="w-full py-1 px-5">
        <p>200 likes</p>
        <p className="opacity-50 py-1 cursor-pointer" onClick={toggleCommentModel}>View Comments</p>
      </div>

      {/* Comment Section */}
      <div className="border-t w-full">
        <div className="flex items-center px-5 py-2">
          <BsEmojiSmile className="text-2xl" />
          <input
            className="p-2 w-full bg-transparent outline-none"
            type="text"
            placeholder="Add a comment..."
          />
        </div>
      </div>
      <CommentsModel 
        toggleLike={toggleLike} 
        onClose={onClose}
        isOpen={isOpen} 
        toggleSave={toggleSave} 
        isPostLiked={isPostLiked}
        isSaved={isSaved}
      />
    </div>
  );
};

export default PostCard;
