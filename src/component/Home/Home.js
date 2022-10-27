import React from 'react';

const Home = () => {
    return (
        <div className='bg-blue-300 lg:p-8 lg:flex'>
            <div className='lg:w-1/2 flex justify-center items-center font-bold'>
                <h1 className='text-6xl text-white'>WELCOME TO MY <br /> LEARNING PAGE.</h1>
            </div>
            <div className='lg:w-1/2 p-8'>
                <img src='https://tse3.mm.bing.net/th?id=OIP.mRbi3lJ6uBu1ttve2x60NQHaE8&pid=Api&P=0' />
            </div>
        </div>
    );
};

export default Home;