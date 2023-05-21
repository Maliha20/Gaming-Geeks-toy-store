import React from 'react';
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import useTitle from '../../hooks/useTitle';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            
           <Categories></Categories>
           <Gallery></Gallery>
        </div>
    );
};

export default Home;