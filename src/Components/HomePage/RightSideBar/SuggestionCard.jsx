import React from 'react'

const SuggestionCard = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
            <img
                className='w-9 h-9 rounded-full' 
                src="/Images/AlterProfilePic.png" 
                alt="" 
            />
            <div className='text-sm font-semibold ml-2'>
                <p>mansioli1999</p>
                <p className='opacity-60'>follows you</p>
            </div>
        </div>
        <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  )
}

export default SuggestionCard