import React from 'react';
import { Outlet } from 'react-router-dom';
import PhotoLensFooter from '../components/Footer/PhotoLensFooter';

import Header from '../components/Home/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <PhotoLensFooter></PhotoLensFooter>
        </div>
    );
};

export default Main;