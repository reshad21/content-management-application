import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleContent } from '../../redux/Thunk/content/fetchSIngleContent';

const UpdateContent = () => {
    const contentData = useSelector((state) => state.content);
    console.log(contentData);

    const dispatch = useDispatch();

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        dispatch(fetchSingleContent(id))
    }, [dispatch,id])

    const handleUpdate = (e) => {
        e.preventDefault();
    }
    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleUpdate}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='title'>
                        Title
                    </label>
                    <input className="input input-bordered w-full max-w-xs" type='text' id='title' />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input className="input input-bordered w-full max-w-xs" type='text' name='image' id='image' />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='tag'>
                        Tags
                    </label>
                    <select className="select select-bordered w-full max-w-xs" name='tag' id='tag' >
                        <option value='web'>web</option>
                        <option value='front'>front</option>
                        <option value='redux'>redux</option>
                        <option value='backend'>backend</option>
                        <option value='react'>react</option>
                    </select>
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='description'>
                        Description
                    </label>
                    <textarea className="textarea textarea-bordered textarea-xs w-full max-w-xs" placeholder="Bio" type='text' name='description' id='description'></textarea>
                </div>
                <div className='flex flex-col w-full max-w-xs'></div>
                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500 btn btn-primary'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateContent;