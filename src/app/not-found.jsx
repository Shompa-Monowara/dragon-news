import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-4'>
            <h2  className='font-bold text-5xl text-purple-500'>This page is not found</h2>
            <Link href={"/"}>
                <button className="btn bg-pink-500 text-white gap-4">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;