import React from 'react';
import AboutCard from '../components/Aboutitems';
import lock from '../assets/images/lock.png';
import stats from '../assets/images/stats.png';
import trophy from '../assets/images/trophy.png';
const About = () =>{

return(
    <div className='my-container about-section' id="about">
        <AboutCard
        title="24/7 Support"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        imageUrl={lock}
        />
        <AboutCard
        title="1000+ of reviews"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        imageUrl={stats}
        />
        <AboutCard
        title="And more!"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        imageUrl={trophy}
        />
    </div>
);

}
export default About;