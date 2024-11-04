import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPhotoVideo } from 'react-icons/fa'
import './CreatePage.css'

const CreatePage = ({ onClose, isOpen }) => {
    const [isDragOver, setIsDragOver] = useState(false)
    const [file, setFile] = useState(null)
    const [caption, setCaption] =  useState('')

    // Handle file drop
    const handleDrop = (event) => {
        event.preventDefault()
        const droppedFile = event.dataTransfer.files[0]
        if (droppedFile && (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/"))) {
            setFile(droppedFile)
        }
        setIsDragOver(false)
    }

    // Handle drag over event
    const handleDragOver = (event) => {
        event.preventDefault()
        setIsDragOver(true)
    }

    // Handle drag leave event
    const handleDragLeave = () => {
        setIsDragOver(false)
    }

    // Handle file input change
    const toggleOnChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile && (selectedFile.type.startsWith('image/') || selectedFile.type.startsWith('video/'))) {
            setFile(selectedFile)
        } else {
            alert("Please select an Image or Video")
        }
    }

    const toggleCaptionChange = (e) => {
        setCaption(e.target.value)
    }

    return (
        <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <div className='flex justify-between py-2 px-10 items-center'>
                    <p className='font-bold'>Create New Post</p>
                    <Button variant={'ghost'} size='sm' colorScheme={'blue'}>Share</Button>
                </div>
                <hr />
                <ModalBody>
                    <div className='h-[75vh] flex'>
                        {/* Left Side: Image/Video Upload */}
                        <div className='w-[50%] flex items-center justify-center p-4'>
                            {!file ? (
                                <div
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    className={`drag-drop h-full w-full flex flex-col items-center justify-center border-2 border-dashed rounded ${isDragOver ? 'drag-over' : ''}`}
                                >
                                    <FaPhotoVideo className='text-4xl mb-3' />
                                    <p className='mb-3'>Drag Photos and Videos here</p>
                                    <label htmlFor="file-upload" className='custom-file-upload'>
                                        Select from Computer
                                    </label>
                                    <input type="file" accept="image/*,video/*" id="file-upload" onChange={toggleOnChange} />
                                </div>
                            ) : (
                                <div className='h-full w-full flex items-center justify-center'>
                                    {file.type.startsWith('image/') ? (
                                        <img src={URL.createObjectURL(file)} alt="Selected" className='max-h-full object-contain' />
                                    ) : (
                                        <video controls className='max-h-full w-full object-contain'>
                                            <source src={URL.createObjectURL(file)} type={file.type} />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Divider */}
                        <div className='w-[1px] bg-gray-300 mx-4'></div>

                        {/* Right Side: Caption and Details */}
                        <div className='w-[50%] p-4'>
                            <div className='flex items-center mb-4'>
                                <img className='w-8 h-8 rounded-full' src="/Images/TempProfilePic.png" alt="Profile" />
                                <p className='font-semibold ml-4'>himanshu_oli_18</p>
                            </div>
                            <textarea
                                className='w-full p-2 border rounded focus:outline-none'
                                rows="4"
                                placeholder='Write a caption...'
                                onChange={toggleCaptionChange}
                            ></textarea>
                            <p className='text-xs opacity-60 font-semibold flex justify-end'>{caption.length}/500</p>
                            <input
                                className='w-full p-2 mt-3 border rounded focus:outline-none'
                                placeholder='Add location'
                            />
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CreatePage
