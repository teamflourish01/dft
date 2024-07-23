import React from 'react';
import '../../components/contact/Contact.css';
import Button from '../button/Button';
import locationicon from '../../images/location.png';
import phoneicon from '../../images/call.png';
import emailicon from '../../images/email.png';

function Contact() {
    return (
        <>
            <section>
                <div className='full-width'>
                    <div className="main-content-1320">
                        <div className="padding-dft"></div>
                        <div className='contact-container'>
                            <div className="title contact-title">
                                <p className="maintitle">Contact Us</p>
                            </div>
                            <div className="contact-content">
                                <div className="contact-form">
                                    <div className="name-contact-row">
                                        <div className="input-field name-contact">
                                            <div className='input-field'>Name</div>
                                            <div className="input-group name-contact-input">
                                                <input type="text" className='input' />
                                            </div>
                                        </div>
                                        <div className="input-field name-contact">
                                            <div className='input-field'>Contact Number</div>
                                            <div className="input-group name-contact-input">
                                                <input type="text" className='input' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="email-row">
                                        <div className="input-field">
                                            <div className='input-field'>Email</div>
                                            <div className="input-group">
                                                <input type="text" className='input' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="message-row">
                                        <div className="input-field">
                                            <div className='input-field'>Message</div>
                                            <div className="input-group">
                                                <textarea className='input' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-contact">
                                        <Button label="Submit" />
                                    </div>
                                </div>
                                <div className="contact-address">
                                    <div className="address">
                                        <img src={locationicon} alt="location-icon" className='icon-contact' />
                                        <p className='address-land-mark'>
                                            A9, Gauri Nagar Society,
                                            Near Swaminarayan Temple,
                                            Ranna Park, Ghatlodia,
                                            Ahmedabad- 380061
                                        </p>
                                    </div>
                                    <div className="phone-number">
                                        <img src={phoneicon} alt="phone-icon" className='icon-contact' />
                                        <p>
                                            (+91) 98254 71959
                                            | (+91) 70161 41186
                                        </p>
                                    </div>
                                    <div className="email ">
                                        <img src={emailicon} alt="email-icon" className='icon-contact' />
                                        <p className='address-land-mark'>
                                            dftalumnifamily@gmail.com
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        </section>
                    </>
                    );
}

                    export default Contact;
