import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { readArticleLater } from '../redux/actions/content';

const ArticleCard = ({ article }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="card w-full glass">
                <figure><img src={article?.image} alt="car!" className='object-cover' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{article?.title}</h2>
                    <p>{
                        (article?.description.length > 200)
                            ? <p>{article?.description.slice(0, 160)} ....</p>
                            : article?.description
                    }</p>
                    <span className='badge badge-md'>{article?.tag}</span>
                    <div className="card-actions justify-end">
                        <Link to={`/article-details/${article?._id}`} className="btn btn-outline btn-accent">Read More</Link>
                        <button className='btn btn-outline btn-primary' onClick={() => dispatch(readArticleLater(article))}>Read Later</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;