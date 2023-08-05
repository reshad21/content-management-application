import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='col-span-4 md:col-span-2 lg:col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-1 md:p-3 lg:p-5 rounded-lg'>
            <ul className='flex gap-3  flex-col h-full overflow-hidden text-[10px] md:text-base lg:text-base'>
                <li>Admin Dashboard</li>
                <li>
                    <Link to='/dashboard' className='btn btn-base btn-sm text-[13px]'>Product List</Link>
                </li>
                <li>
                    <Link to='add-product' className='btn btn-base btn-sm text-[13px]'> Add Product </Link>
                </li>
                <li className='mt-auto'>
                    <Link to='/' className='btn btn-outline btn-sm font-bold text-[13px]'> Back to Home </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;