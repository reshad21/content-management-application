import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from '../../components/ArticleCard';
import { clearReadingList } from '../../redux/actions/content';

const ReadLater = () => {
    const articles = useSelector(state => state.user.cart);
    const alertMessage = useSelector(state => state.user.alertMessage);
    const dispatch = useDispatch();

    let content;
    if (alertMessage) {
        content = <p className='text-2xl font-semibold'>{alertMessage}</p>
    }
    if (articles.length > 0) {
        content =  articles?.map(article => <ArticleCard article={article} key={article._id}></ArticleCard>)
    }


    return (
        <>
            <div className="text-right mb-3 max-w-7xl mx-auto px-6">
                <button onClick={() => dispatch(clearReadingList())} className='btn btn-sm btn-outline btn-success font-bold'>Clear Reading List</button>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-16 lg:px-36 md:25'>
                {
                    content
                }
            </div>
        </>
    );
};

export default ReadLater;