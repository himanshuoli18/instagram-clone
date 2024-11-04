import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import styled from 'styled-components';
import Progressbar from './Progressbar';

const StoryViewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
    position: relative; // Position relative to the container for the absolute button
`;

const StoryImage = styled.img`
    border-radius: 10px;
    max-height: 90vh;
    object-fit: contain;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 50px;
    right: 50px; 
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }
`;


const StoryView = ({ stories }) => {
    const navigate = useNavigate();
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const duration = 5000;

    const toggleNextStory = useCallback(() => {
        setCurrentStoryIndex((prev) => (prev < stories.length - 1 ? prev + 1 : 0));
        setActiveIndex((prev) => (prev < stories.length - 1 ? prev + 1 : 0));
    }, [stories.length]);

    useEffect(() => {
        const interval = setInterval(toggleNextStory, duration);
        return () => clearInterval(interval);
    }, [toggleNextStory, duration]);

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div className='relative w-full'>
            <StoryViewContainer>
                <CloseButton onClick={handleClose}>✖</CloseButton> {/* Close button */}
                <StoryImage src={stories[currentStoryIndex]?.image} alt="Story" />
                <div className='absolute top-0 flex w-full'>
                    {stories.map((_, index) => (
                        <Progressbar key={index} duration={duration} index={index} activeIndex={activeIndex} />
                    ))}
                </div>
            </StoryViewContainer>
        </div>
    );
};

export default StoryView;
