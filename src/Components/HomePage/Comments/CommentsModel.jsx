import {
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay
} from '@chakra-ui/react';
import React from 'react';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import CommentsCard from './CommentsCard';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { RiSendPlaneLine } from 'react-icons/ri';

const CommentsModel = ({ onClose, isOpen, isSaved, isPostLiked, toggleLike, toggleSave }) => {
    return (
        <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className="flex h-[75vh]">
                        {/* Image Section */}
                        <div className="w-[50%] flex flex-col justify-center -ml-5 mr-1">
                            <img className="max-h-full w-full object-cover" src="/Images/TempPost.png" alt="Post" />
                        </div>

                        {/* Comments Section */}
                        <div className="border-l w-1/2 pl-10 flex flex-col justify-between relative">
                            {/* Header */}
                            <div className="flex justify-between items-center py-5 border-b">
                                <div className="flex items-center">
                                    <img className="w-9 h-9 rounded-full" src="/Images/TempProfilePic.png" alt="Profile" />
                                    <p className="ml-2">himanshu_oli_18</p>
                                </div>
                                <BsThreeDots />
                            </div>

                            <div className="space-y-2 overflow-y-auto flex-grow scrollbar-hide">
                                {[...Array(30)].map((_, index) => (
                                    <CommentsCard key={index} />
                                ))}
                            </div>

                            {/* Post Actions and Comment Input */}
                            <div className="border-t pt-3">
                                <div className="flex justify-between items-center pb-2">
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
                                        <RiSendPlaneLine className="text-2xl hover:opacity-50 cursor-pointer" />
                                    </div>
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
                                <p className="w-full">200 likes</p>
                                <p className="opacity-50 text-sm pb-3">1 day ago</p>

                                {/* Add a Comment */}
                                <div className="flex items-center px-5 py-2 border-t">
                                    <BsEmojiSmile className="text-2xl" />
                                    <input
                                        className="p-1 w-full bg-transparent outline-none"
                                        type="text"
                                        placeholder="Add a comment..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default CommentsModel;
