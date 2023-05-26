import React from 'react';
import Categories from '../Categories/Categories';
import useTitle from '../../hooks/useTitle';
import Gallery from '../Gallery/Gallery';
import Extra1 from '../Extra1/Extra1';
import Extra2 from '../Extra2/Extra2';

const Home = () => {
    useTitle('Home')
    return (
        <div>
          
           <Categories></Categories>
           <Gallery></Gallery>
           <Extra1></Extra1>
           <Extra2></Extra2>
        </div>
    );
};

export default Home;