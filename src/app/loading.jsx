import React from 'react';

const LoadingPage = () => {
    return (
        <div className= "flex h-[85vh] items-center justify-center">
            Global Loading
           <span className="loading loading-dots loading-xl"></span> 
        </div>
    );
};

export default LoadingPage;