import React from 'react';
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import useTitle from '../../hooks/useTitle';
import Gallery from '../Gallery/Gallery';
import Extra1 from '../Extra1/Extra1';

const Home = () => {
    useTitle('Home')
    return (
        <div>
          
           <Categories></Categories>
           <Gallery></Gallery>
           <Extra1></Extra1>
        </div>
    );
};

export default Home;