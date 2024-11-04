import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const CommentsCard = () => {
    const [isCommentLiked, setIsCommentLiked] = useState(false)
    const handleLikeComment = () => {
        setIsCommentLiked(!isCommentLiked)
    }
    return (
        <div className='border rounded-lg mt-4'>
            <div className='flex items-center justify-between w-full p-3'>
                <div className='flex items-center'>
                    <div>
                        <img
                            className='w-9 h-9 rounded-full'
                            src="/Images/AlterProfilePic.png"
                            alt=""
                        />
                    </div>
                    <div className='ml-2'>
                        <p>
                            <span className='font-semibold'>mansi_oli_1999</span>
                            <span className='ml-2'>Nice car</span>
                        </p>
                        <div className='flex items-center space-x-3 text-xs opacity-60 pt-1'>
                            <span>1 min ago</span>
                            <span>23 likes</span>
                        </div>
                    </div>
                </div>
                {isCommentLiked ? (
                    <AiFillHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointer text-red-600' />
                ) : (
                    <AiOutlineHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointer' />
                )}
            </div>
            
        </div>
    )
}

export default CommentsCard