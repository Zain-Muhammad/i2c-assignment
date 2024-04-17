import React from 'react';

const AboutCard = ({ title, content, imageUrl }) => {
    return (
        <div className="about-item">
            <img src={imageUrl} alt={title} style={{ height: '64px',width: '64px' }} loading="lazy"/>
            <div className='about-disciption'>
                <div className='about-heading'>{title}</div>
                <div className='about-content'>{content}</div>
            </div>
        </div>
    );
};

export default AboutCard;