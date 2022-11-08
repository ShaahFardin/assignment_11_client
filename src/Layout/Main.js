import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Home/Header/Header';
import Home from '../components/Home/Home/Home';
import ServiceDetails from '../components/Services/ServiceDetails-Review/ServiceDetails';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;