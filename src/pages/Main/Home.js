import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ArticleCard from './../../components/ArticleCard';

const Home = () => {
    const articlesState = useSelector((state) => state);
    console.log(articlesState);

    const [articles, setArticle] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/articls')
            .then((res) => res.json())
            .then(data => setArticle(data))
    }, [])

    console.log(articles);

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-16 lg:px-36 md:25'>
            {
                articles.map(article => <ArticleCard article={article} key={article._id}></ArticleCard>)
            }
        </div>
    );
};

export default Home;