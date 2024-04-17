import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import registrationimg from '../assets/images/i2c-1.png';
const RegistrationSection = () =>{
    
    return(
        <div className='my-container registration-section' id='registration'>
            <img src={registrationimg} alt="registrationimg" className='registration-img' />
            <RegistrationForm />
        </div>
    );

}
export default RegistrationSection;