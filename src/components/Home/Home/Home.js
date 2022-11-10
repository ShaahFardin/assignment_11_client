import React from 'react';
import LimitedService from '../../Services/LimitedService';
import Carousal from '../Carousal/Carousal';
import Dashboard from '../Dashboard/Dashboard';

const Home = () => {
    return (
        <div className=''>
           <div className='flex'>
           <Dashboard></Dashboard>
            <Carousal></Carousal>
           </div>
            <LimitedService></LimitedService> 
        </div>
    );
};

export default Home;