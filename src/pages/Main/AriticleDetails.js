import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleContent } from '../../redux/Thunk/content/fetchSIngleContent';

const AriticleDetails = () => {
    const singleContentView = useSelector((state) => state.article.singleContent)
    const dispatch = useDispatch();
    let { id } = useParams();
    useEffect(() => {
        dispatch(fetchSingleContent(id))
    }, [dispatch, id])
    return (
        <div className='p-2 max-w-screen-xl mx-auto mb-10 card shadow-xl'>
            <figure>
                <img src={singleContentView?.image} alt="" className='h-[550px] object-cover w-full' />
            </figure>
            <div className="card-body">
                <h2 className='card-title'>{singleContentView?.title}</h2>
                <div className="py-2">
                    <p>Category : <span className=' text-orange-700 font-bold'>{singleContentView?.tag}</span></p>
                    <p>ReleaseDate : <span className='text-orange-700 font-bold'>{new Date(singleContentView?.date).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        timeZoneName: 'short',
                    })}</span></p>
                </div>
                <p className=''>{singleContentView?.description}</p>
            </div>
        </div>
    );
};

export default AriticleDetails;