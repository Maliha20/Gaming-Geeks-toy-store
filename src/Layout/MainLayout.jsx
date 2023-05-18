import React from 'react';
import Header from '../Home/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/footer';
import './Layout.css'
const MainLayout = () => {
    return (
        <div className='footer-position'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;