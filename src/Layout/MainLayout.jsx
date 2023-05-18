import React from 'react';
import Header from '../Home/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;