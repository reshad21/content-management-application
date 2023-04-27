import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleContent } from '../../redux/Thunk/content/fetchSIngleContent';

const ContentDetails = () => {
    const content = useSelector((state) => state.content);

    const dispatch = useDispatch();
    let { id } = useParams();
    


    useEffect(() => {
        dispatch(fetchSingleContent(id));
    }, [dispatch,id])


    return (
        <>
        <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={content?.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{content?.title}</h2>
                    <p>{content?.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContentDetails;