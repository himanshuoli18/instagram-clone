import React from 'react'
import { useNavigate } from 'react-router-dom'

const StoryCircle = () => {
  const navigate = useNavigate()
  const toggleNavigate = () => {
    navigate("/story")
  }
  return (
    <div onClick={toggleNavigate} className='flex cursor-pointer flex-col items-center'>
        <img
            className='w-16 h-16 rounded-full' 
            src="/Images/TempProfilePic.png" 
            alt="Story" 
        />
        <p>username</p>
    </div>
  )
}

export default StoryCircle