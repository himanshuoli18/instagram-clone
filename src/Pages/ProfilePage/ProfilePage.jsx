import React from 'react'
import ProfileUserDetails from '../../Components/ProfilePage/ProfileUserDetails'
import ReqUserPostPart from '../../Components/ProfilePage/ReqUserPostPart'

const ProfilePage = () => {
    return (
        <div className='px-20'>
            <div>
                <ProfileUserDetails />
            </div>
            <div>
                <ReqUserPostPart />
            </div>
        </div>
    )
}

export default ProfilePage