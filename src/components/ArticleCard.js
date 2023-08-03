import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
    // console.log(article);
    const { title, image, description, tag } = article;
    return (
        <div>
            <div className="card w-full glass">
                <figure><img src={image} alt="car!" className='object-cover' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{
                        (description.length > 200)
                            ? <p>{description.slice(0, 160)} ....</p>
                            : description
                    }</p>
                    <span className='badge badge-md'>{tag}</span>
                    <div className="card-actions justify-end">
                        <Link to={`/article-details/${article?._id}`} className="btn btn-outline btn-accent">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;