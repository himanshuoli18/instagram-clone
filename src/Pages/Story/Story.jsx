import React from 'react';
import StoryView from '../../Components/HomePage/Story/StoryView';

const Story = () => {
    const stories = [ // Use plural for clarity
        {
            image: "/Images/Story1.png",
        },
        {
            image: "/Images/Story2.png",
        },
        {
            image: "/Images/Story3.png",
        },
        {
            image: "/Images/Story4.png",
        },
    ];

    return (
        <div>
            <StoryView stories={stories} />
        </div>
    );
};

export default Story;
