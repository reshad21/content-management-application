import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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
        <div>
            <h1>Homepage</h1>
            
        </div>
    );
};

export default Home;