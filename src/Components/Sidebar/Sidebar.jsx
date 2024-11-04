import React, { useState } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { menu } from '../../data/SidebarConfig';
import { useNavigate } from 'react-router-dom';
import CreatePage from '../CreatePage/CreatePage';
import { useDisclosure } from '@chakra-ui/react';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState();
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleTabClick = (title) => {
        setActiveTab(title);
        switch (title) {
            case 'Profile':
                navigate("/username");
                break;
            case 'Home':
                navigate("/");
                break;
            case 'Create':
                onOpen();
                break;
            case 'Search':
                navigate("/search")
                break;
            default:
                break;
        }
    }
    

    return (
        <div className='flex'>
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between px-10">
                {/* Logo Section */}
                <div className="pt-10">
                    <img src="/Images/instaLogo.png" alt="Instagram Logo" className="w-40" />
                </div>

                {/* Menu Items */}
                <div className="mt-10 flex-grow">
                    {menu.map((item) => (
                        <div
                            key={item.title}
                            onClick={() => handleTabClick(item.title)}
                            className="flex items-center mb-8 cursor-pointer text-lg"
                        >
                            {/* Show icons always */}
                            {activeTab === item.title ? item.activeIcon : item.icon}
                            
                            {/* Show title only when Search is NOT active */}
                            
                                <p className={`${activeTab === item.title ? "font-bold" : "font-semibold"} ml-2 text-xl`}>
                                    {item.title}
                                </p>
                        
                        </div>
                    ))}
                </div>

                {/* "More" Section */}
                <div className="flex items-center cursor-pointer pb-10">
                    <IoReorderThreeOutline className="text-3xl mr-5" />
                    <p className="text-xl font-serif">More</p>
                </div>
                <CreatePage onClose={onClose} isOpen={isOpen} />
            </div>

        </div>
    );
};

export default Sidebar;
