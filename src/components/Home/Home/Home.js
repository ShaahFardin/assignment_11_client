import React from 'react';
import LimitedService from '../../Services/LimitedService';
import Carousal from '../Carousal/Carousal';

const Home = () => {
    return (
        <div>
            <Carousal></Carousal>
            <LimitedService></LimitedService>
        </div>
    );
};

export default Home;