import Carousel from '../components/Carousel';
import microsoft from '../assets/images/microsoft.png';
import twiter from '../assets/images/twiter.png';
import coke from '../assets/images/coke.png';
import underline from '../assets/images/underline.png';

const PartnerSlider = () => {
    return (
        <div>
            <div className='trusted-heading-section'>
                <div className='underlined-text'>Trusted by
                    <img src={underline} alt="underline" className='underline-img' loading='lazy'/>
                </div>
                <div className='partner-discription'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.
                </div>
            </div> 
            <div className="my-container partner-carousel-wrapper">
                <Carousel>
                    {/* Repeat your carousel card as needed */}
                    <a href="#" className="partner-card">
                        <img src={microsoft} alt="partner image" className="partner-img" style={{height:'56.07px',width:'262.49px'}} loading="lazy" />
                    </a>
                    <a href="#" className="partner-card">
                        <img src={twiter} alt="partner image" className="partner-img" style={{height:'72px',width:'88px'}} loading="lazy" />
                    </a>
                    <a href="#" className="partner-card">
                        <img src={coke} alt="partner image" className="partner-img" style={{height:'98.38',width:'300.44px'}} loading="lazy" />
                    </a>
                    <a href="#" className="partner-card">
                        <img src={microsoft} alt="partner image" className="partner-img" style={{height:'56.07px',width:'262.49px'}} loading="lazy" />
                    </a>
                    <a href="#" className="partner-card">
                        <img src={twiter} alt="partner image" className="partner-img" style={{height:'72px',width:'88px'}} loading="lazy" />
                    </a>
                    <a href="#" className="partner-card">
                        <img src={coke} alt="partner image" className="partner-img" style={{height:'98.38',width:'300.44px'}} loading="lazy" />
                    </a>
                    {/* Add more items as needed */}
                </Carousel>
            </div>
        </div>
    );
};

export default PartnerSlider;
