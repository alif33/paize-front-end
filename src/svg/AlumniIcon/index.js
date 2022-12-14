import React from 'react';

const AlumniIcon = ({ danger, color }) => {
    return (
        <svg width="22" height="22" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 25.6667V24C2 20.3182 4.98477 17.3333 8.66667 17.3333H15.3333C19.0152 17.3333 22 20.3182 22 24V25.6667" stroke={danger? "#dc3545": color} strokeWidth="3.58" strokeLinecap="round" /> 
            <path d="M12 12.3333C9.2385 12.3333 7 10.0948 7 7.33334C7 4.57192 9.2385 2.33334 12 2.33334C14.7615 2.33334 17 4.57192 17 7.33334C17 10.0948 14.7615 12.3333 12 12.3333Z" stroke={danger? "#dc3545": color} strokeWidth="3.58" strokeLinecap="round" />
        </svg>

    );
};

export default AlumniIcon;