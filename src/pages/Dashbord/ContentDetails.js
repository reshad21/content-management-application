import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleContent } from '../../redux/Thunk/content/fetchSIngleContent';

const ContentDetails = () => {
    const singleContent = useSelector((state) => state.singleContent);

    const dispatch = useDispatch();
    let { id } = useParams();
    


    useEffect(() => {
        dispatch(fetchSingleContent(id));
    }, [dispatch,id])


    return (
        <>
        <div className="card shadow-xl">
                <figure><img src={singleContent?.image} alt="" className='h-[450px] object-cover w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{singleContent?.title}</h2>
                    <p>{singleContent?.description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContentDetails;