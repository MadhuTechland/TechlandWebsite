import React from 'react'
import "./Contact.css";
import contactimg from '../../Components/Assets/contactus.mp4';
const Contact = () => {
    return (
        <>
            <div className='contact-title-header'>
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-content">We'd love to hear from you! Whether you have a question,
                    feedback, or just want to say hello, our team is here to assist you. Feel free
                    to reach out to us through the <span>CONTACT FORM</span></p>

            </div>
            <div className="contact-container-fluid">
                <div className="contact-form-content">

                    <div action="" className="contact-form-control">
                        <div className="contact-input-field">
                            <input type="text" className="contact-input" placeholder=" " required />
                            <label className="contact-label">Name</label>
                        </div>
                        <div className="contact-input-field">
                            <input type="tel" className="contact-input" placeholder="  " required />
                            <label className="contact-label">Phone Number</label>
                        </div>
                        <div className="contact-input-field">
                            <input type="email" className="contact-input" placeholder=" " required />
                            <label className="contact-label">E-mail</label>
                        </div>
                        <div className="contact-input-field">
                            <textarea id="message" className="contact-input" placeholder=" " required />
                            <label className="contact-label">Message</label>
                        </div>
                        <button className="contact-submit-btn">Submit</button>
                    </div>
                </div>
                <video
                    src={contactimg}
                    width="40%"
                    autoPlay
                    loop
                    muted
                    style={{ mixBlendMode: 'multiply', marginTop: '-50px' }}
                    aria-label="Introduction video about Techland IT Solutions"
                />
            </div>
        </>
    )
}

export default Contact