import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const articles = useSelector((state) => state);
    console.log(articles);

    return (
        <div>
            <h1>Homepage</h1>
        </div>
    );
};

export default Home;