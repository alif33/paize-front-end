import React from 'react';

const SchoolIcon2 = ({ danger, color }) => {
    return (
        <svg width="22" height="22" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9998 10.5C16.4971 10.5 16.974 10.3025 17.3256 9.95084C17.6773 9.59921 17.8748 9.1223 17.8748 8.62502C17.8748 8.12774 17.6773 7.65082 17.3256 7.29919C16.974 6.94756 16.4971 6.75002 15.9998 6.75002C15.5025 6.75002 15.0256 6.94756 14.674 7.29919C14.3224 7.65082 14.1248 8.12774 14.1248 8.62502C14.1248 9.1223 14.3224 9.59921 14.674 9.95084C15.0256 10.3025 15.5025 10.5 15.9998 10.5ZM17.8398 1.63752C17.3197 1.21486 16.67 0.984131 15.9998 0.984131C15.3296 0.984131 14.6799 1.21486 14.1598 1.63752L1.65482 11.8C0.134822 13.04 1.00982 15.5 2.96982 15.5H3.49982V26C2.01482 26.7575 0.999822 28.3 0.999822 30.0825V31.75C0.999822 32.0815 1.13152 32.3995 1.36594 32.6339C1.60036 32.8683 1.9183 33 2.24982 33H29.7498C30.0813 33 30.3993 32.8683 30.6337 32.6339C30.8681 32.3995 30.9998 32.0815 30.9998 31.75V30.0825C30.9998 28.3025 29.9848 26.7575 28.4998 26V15.5H29.0298C30.9898 15.5 31.8648 13.0375 30.3423 11.8L17.8423 1.63502L17.8398 1.63752ZM15.7398 3.57752C15.8141 3.51744 15.9068 3.48467 16.0023 3.48467C16.0979 3.48467 16.1905 3.51744 16.2648 3.57752L27.8523 13H4.14482L15.7398 3.57502V3.57752ZM25.9998 25.5H23.4998V15.5H25.9998V25.5ZM20.9998 25.5H17.2498V15.5H20.9998V25.5ZM14.7498 25.5H10.9998V15.5H14.7498V25.5ZM26.4173 28C27.5673 28 28.4998 28.9325 28.4998 30.0825V30.5H3.49982V30.0825C3.49982 28.9325 4.43232 28 5.58232 28H26.4173ZM8.49982 25.5H5.99982V15.5H8.49982V25.5Z" fill={danger? "#dc3545": color} fillOpacity="1" />
        </svg>

    );
};

export default SchoolIcon2;