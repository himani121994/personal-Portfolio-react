import React from 'react';
import '../assets/css/contact.css'; 
import img1 from '../assets/img/himaniphoto.jpg'; 

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact">
                <p>Contact</p>
                <h1>Contact With Me</h1>
                <div className='row' style={{marginTop:"20px"}}>
                    <div className='col-md-1'></div>
                    <div className='col-md-4 contact-details-container'>
                        <div className="contact-img">
                            <img src={img1} alt="" style={{width:"400px",height:"400px",marginLeft:"-8px",marginTop:"-18px",borderRadius:"8px"}}/>
                        </div>
                        <div className="contact-details">
                            <h2>Himani Bhimte</h2>
                            <h4>Junior software Devloper</h4>
                            <p className='detail-p'>I am available for freelance work. Connect with me via and call in to my account.</p>
                            <p>Phone: +01234567890</p>
                            <p>Email: <a href="mailto:admin@example.com">himanibhimte0808@gmail.com</a></p>
                        </div>
                    </div>
                    <div className='col-md-6 contact-form-container'>
                        <div className="contact-form">
                            <h2>Find With Me</h2>
                            <form className="contact-form-elements">
                                <div className="contact-form-group">
                                    <div className="contact-form-input">
                                        <label htmlFor="name">Your Name</label><br />
                                        <input type="text" id="name" name="name" required />
                                    </div>
                                    <div className="contact-form-input">
                                        <label htmlFor="phone">Phone Number</label><br />
                                        <input type="tel" id="phone" name="phone" required />
                                    </div>
                                </div>
                                <div className="contact-form-input">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="contact-form-input">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" required />
                                </div>
                                <div className="contact-form-input">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea id="message" name="message" required></textarea>
                                </div>
                                <div className="contact-form-input">
                                    <button type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
