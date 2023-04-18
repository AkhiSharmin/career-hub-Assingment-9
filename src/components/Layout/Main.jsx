import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>n
        </div>
    );
};

export default Main;