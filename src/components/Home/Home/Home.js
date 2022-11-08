import React from 'react';
import LimitedService from '../../Services/LimitedService';
import Carousal from '../Carousal/Carousal';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Carousal></Carousal>
            <LimitedService></LimitedService>
        </div>
    );
};

export default Home;