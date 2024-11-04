import React, { useEffect, useState } from 'react';
import './Progressbar.css';

const Progressbar = ({ index, activeIndex, duration }) => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        if (index === activeIndex) {
            setProgress(0); // Reset only when it becomes active
            
            const increment = 100 / (duration / 100); // Calculate increment based on duration
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev < 100) {
                        return Math.min(prev + increment, 100); // Increment progress smoothly
                    }
                    clearInterval(interval); // Stop interval when progress reaches 100
                    return prev;
                });
            }, 100); // Update every 100 ms

            return () => clearInterval(interval);
        } else {
            setProgress(0); // Reset progress when not active
        }
    }, [activeIndex, duration, index]); // Dependencies include index

    const isActive = index === activeIndex;

    return (
        <div className={`progress-bar-container ${isActive ? 'active' : ''}`}>
            <div className={`progress-bar ${isActive ? 'active' : ''}`} style={{ width: `${progress}%` }} />
        </div>
    );
};

export default Progressbar;
