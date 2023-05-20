import React from 'react';
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            
           <Categories></Categories>
        </div>
    );
};

export default Home;