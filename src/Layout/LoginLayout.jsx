import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer/footer';
import './Layout.css'

const LoginLayout = () => {
    return (
        <div className='footer-position'>
           <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;