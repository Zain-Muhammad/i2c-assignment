import React from 'react';

const Card = ({ title, content, imageUrl }) => {
    return (
        <div className="hero-card">
            <div className='img-wrapper'>
                <img src={imageUrl} alt={title} />
            </div>
            <div className='disciption-wrapper'>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Card;