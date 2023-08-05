import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashbord = () => {
    return (
        <div className='grid grid-cols-12 p-3 gap-3 '>
            <Sidebar />
            <div className='col-span-8 md:col-span-10 lg:col-span-10 w-full bg-gray-100 rounded-lg'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashbord;