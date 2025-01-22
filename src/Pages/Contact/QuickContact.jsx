import React from 'react';
import './Contact.css'; // Assuming you're using SCSS for styles

const QuickContact = ({ close }) => {
    return (
        <div className="unique-form-container-bg">


            <div className="unique-form-container">
                <div className='unique-form-container-header'>
                    <h3>Get a Quote</h3>
                    <button class="unique-form-close-button" onClick={close}>
                        <svg fill="none" viewBox="0 0 15 15" height="15" width="15">
                            <path
                                stroke-linecap="round"
                                stroke-width="2"
                                stroke="white"
                                d="M1 14L14 1"
                            ></path>
                            <path
                                stroke-linecap="round"
                                stroke-width="2"
                                stroke="white"
                                d="M1 1L14 14"
                            ></path>
                        </svg>
                    </button>

                </div>
                <form className="unique-form">
                    <div className="unique-form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="unique-form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" name="phone" required />
                    </div>
                    <div className="unique-form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="unique-form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="10" cols="50" required></textarea>
                    </div>
                    <div className="unique-form-submit-container">
                        <button className="unique-form-submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuickContact;
