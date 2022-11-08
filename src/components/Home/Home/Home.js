import React from 'react';
import LimitedService from '../../Services/LimitedService';
import Carousal from '../Carousal/Carousal';

const Home = () => {
    return (
        <div className='my-36'>
            <Carousal></Carousal>
            <LimitedService></LimitedService> 
        </div>
    );
};

export default Home;