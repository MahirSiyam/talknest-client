import React from 'react';
import Banner from '../Components/Banner';
import Blog from '../Components/Blog';
import Blog2 from '../Components/Blog2';

const Home = () => {
    return (
        <div>
            <div className='mb-10'>
                <Banner></Banner>
            </div>

            <div className='max-w-7xl mx-auto mb-10'>
                <Blog2></Blog2>
            </div>

            <div className='max-w-7xl mx-auto mb-10'>
            <Blog></Blog>
            </div>
        </div>
    );
};

export default Home;