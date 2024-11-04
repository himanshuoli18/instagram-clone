import React from 'react'
import SuggestionCard from './SuggestionCard'

const RightSideBar = () => {
  return (
    <div className=''>
      <div>
        <div className='border p-5 flex justify-between items-center'>
          <div className='flex items-center'>
            <div>
              <img
                className='w-12 h-12 rounded-full'
                src="/Images/TempProfilePic.png"
                alt="" />
            </div>
            <div className='ml-3'>
              <p>Himanshu Oli</p>
              <p className='opacity-60'>himanshu_oli_18</p>
            </div>
          </div>
          <div>
            <p className='bg-gradient-to-tr from-purple-600 to-rose-700 px-3 py-1 rounded-md text-white font-semibold italic'>Switch</p>
          </div>
        </div>
        <div className='space-y-5 mt-10 border p-5'>
          {[1, 2, 3, 4].map((_,item) => <SuggestionCard key={item} />)}
        </div>
      </div>
    </div>
  )
}

export default RightSideBar