import React from 'react';
import Header from '../componentes/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='sticky top-0 z-50'>
                <Header />
            </div>
            <Outlet />
        </div>
    );
};

export default Home;