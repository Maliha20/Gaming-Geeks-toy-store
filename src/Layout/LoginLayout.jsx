import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const LoginLayout = () => {
    return (
        <div>
           <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;