import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-24'>
            <h1 className='text-6xl font-main text-primary '>High Quality, Fashion Products</h1>
            <p className='text-xl text-sans my-5 '>Lorem ipsum dolor sit amet consectetur.</p>
            <button className='bg-[#c47d14] uppercase text-xxl my-5 py-4 px-6 rounded-lg text-white'>Shop Now </button>
        </div>
    );
};

export default Banner;