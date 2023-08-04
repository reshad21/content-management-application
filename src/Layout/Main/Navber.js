import React from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { IoIosListBox } from "react-icons/io";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navber = () => {
    const count = useSelector(state => state.user.cart);
    return (
        <>
            <nav className='h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5 fixed top-0 left-0 right-0 z-50'>
                <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
                    <h1>CMS</h1>

                    <li className='flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3'>
                        <input
                            className='h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none'
                            type='text'
                            name='search'
                            id='search'
                        />
                        <button>
                            <BiSearchAlt />
                        </button>
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    {/* <li>
                    <Link to='/top-rated'>Top Rated</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li> */}
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <Link to='/read-later' className='relative'>
                        <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
                            <IoIosListBox className='text-white' />
                        </li>
                        <span className='absolute top-[-10px] right-0 text-white'>{count.length}</span>
                    </Link>
                    {/* <Link to='/cart'>
                    <li title='cart' className='bg-indigo-500 p-2 rounded-full'>
                        <BsFillCartFill className='text-white ' />
                    </li>
                </Link> */}
                </ul>
            </nav>
            <div className="w-full h-[90px]"></div>
        </>
    );
};

export default Navber;