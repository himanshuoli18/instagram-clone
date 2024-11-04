import React, { useState } from 'react';
import ReqUserPostCard from './ReqUserPostCard';
import { tabs } from '../../data/ProfileConfig';

const ReqUserPostPart = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].tab); // Default active tab

  return (
    <div className="p-5 mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      {/* Tabs Section */}
      <div className="flex space-x-10 border-b pb-3 justify-center">
        {tabs.map((item) => (
          <div
            key={item.tab}
            onClick={() => setActiveTab(item.tab)}
            className={`${
              activeTab === item.tab ? 'border-b-2 border-black' : 'opacity-60'
            } flex items-center cursor-pointer py-2 text-lg`}
          >
            <p>{item.icon}</p>
            <p className="ml-2">{item.tab}</p>
          </div>
        ))}
      </div>

      {/* Posts Section */}
      <div className="grid grid-cols-3 gap-4 mt-5">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ReqUserPostCard key={item} /> // Passing a unique key
        ))}
      </div>
    </div>
  );
};

export default ReqUserPostPart;
