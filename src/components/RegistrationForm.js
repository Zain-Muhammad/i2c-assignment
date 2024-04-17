import React, { useState } from 'react';

const RegistrationForm = () => {
    // State variables for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');  // Changed from setMessage to setCompany for better clarity

    // State variable to track form submission status
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Function to validate email format
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (!name || !email || !company) {
            setErrorMessage('All fields are required.');
            return; // Prevent form submission
        }

        // Validate email format
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return; // Prevent form submission
        }

        // Store form data in local storage
        localStorage.setItem('formData', JSON.stringify({ name, email, company }));

        // Set form submission status to true
        setSubmitted(true);
    };

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        else if (name === 'email') setEmail(value);
        else if (name === 'company') setCompany(value);

        // Reset error message if the user starts typing again
        setErrorMessage('');
    };

    // Check if form is already submitted
    const formData = JSON.parse(localStorage.getItem('formData'));
    const isFormSubmitted = formData && Object.keys(formData).length > 0;

    return (
        <div className='registration-form-wrapper'>
            {isFormSubmitted ? (
                <p className='submit-message'>Thank you for your submission!</p>
            ) : (
                <form onSubmit={handleSubmit} className='registration-form'>
                    <div className='form-heading'>Registration</div>
                    <div className='form-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</div>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <div className='input-wrapper'>
                        <label htmlFor="name">Name <span>*</span></label>
                        <input type="text" id="name" name="name" value={name} onChange={handleChange} placeholder='Enter your name' />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" name="company" value={company} onChange={handleChange} placeholder='Enter your company name'/>
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="email">Email <span>*</span></label>
                        <input type="email" id="email" name="email" value={email} onChange={handleChange} placeholder='Enter your email address'/>
                    </div>
                    <button type="submit" className='submit-btn'>Submit</button>
                </form>
            )}
        </div>
    );
};

export default RegistrationForm;
