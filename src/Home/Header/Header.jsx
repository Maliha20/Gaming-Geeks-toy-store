import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Carousel from '../../Pages/Components/Carousel';

const Header = () => {
    return (
        <div>
            <Carousel></Carousel>
             <Navbar></Navbar>
        </div>
    );
};

export default Header;