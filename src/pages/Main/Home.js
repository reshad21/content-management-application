import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../../redux/Thunk/content/fetchContent';
import ArticleCard from './../../components/ArticleCard';

const Home = () => {
    const articles = useSelector((state) => state.article.content);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContent());
    }, [dispatch])



    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-16 lg:px-36 md:25'>
            {
                (articles?.length > 0) && articles?.map(article => <ArticleCard article={article} key={article._id}></ArticleCard>)
            }
        </div>
    );
};

export default Home;