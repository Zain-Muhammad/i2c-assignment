import React from 'react';
import Card from '../components/HerobannerCards';
import herobanner from '../assets/images/i2c-2.png';
import underline from '../assets/images/underline.png';
import avatar1 from '../assets/images/user.png';
import avatar2 from '../assets/images/user1.png';
import avatar3 from '../assets/images/user2.png';

const Herobanner = () =>{

    return(
        <div className='my-container hero-banner'>
            <div className='hero-banner-left-section'>
                <div className='hero-banner-heading'>
                Lorem ipsum <span className='underlined-text'>dolor
                <img src={underline} alt="underline" className='underline-img'/>
                </span> sit amet yo 👋
                </div>
                {/* hero cards */}
                <div className='cards-wrapper'>
                    <Card
                    title="Andrew Schultz"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
                    imageUrl={avatar1}
                    />
                    <Card
                    title="Andrew Schultz"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
                    imageUrl={avatar2}
                    />
                    <Card
                    title="Andrew Schultz"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
                    imageUrl={avatar3}
                    />
                    <Card
                    title=""
                    content=""
                    imageUrl=""
                    />
                </div>
                {/* hero cards */}
                <div className='gradient-glow'></div>
            </div>
            <img src={herobanner} alt="herobanner" className='herobanner-img' />
        </div>
    );

}
export default Herobanner;