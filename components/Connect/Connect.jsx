/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import { connectData } from './ConnectData';

const Connect = () => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    //     subject: '',
    // });

    // const [submitStatus, setSubmitStatus] = useState(null);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch('/api/contact', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData),
    //     });

    //     if (response.status === 200) {
    //         setSubmitStatus('success');
    //     } else {
    //         setSubmitStatus('error');
    //     }
    // };

    return (
        <div className="section-box mt-4" id="contact">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={connectData.mainData.title}>{connectData.mainData.title2}</h6>
                    <h1>{connectData.mainData.title3}</h1>
                    <p>{connectData.mainData.description}</p>
                    <ul className="list-inline-pills mt-4">
                        <li>
                        <a style={{ color: "rgb(125, 54, 54)" }}
                        href= {connectData.mainData.phone}
                        target="_blank"
                        rel="noopener noreferrer">LinkedIn</a></li>
                        <li>Email: {connectData.mainData.email}</li>
                        {/* <li>Address: {connectData.mainData.address}</li> */}
                    </ul>
                </div>
            </div>
            <div className="mt-4 mt-lg-5">
                {/* Contact Form */}
                <div className="contact-form">
                    <form method="POST" id="contactform" action="https://formspree.io/f/mdorkqbv">
                        <div className="row gx-3 gy-0">
                            <div className="col-12 col-md-6">
                                <input type="text" id="name" name="name" placeholder="Name" required />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="email" id="email" name="email" placeholder="E-Mail" required />
                            </div>
                        </div>
                        <input type="text" id="subject" name="subject" placeholder="Subject" required />
                        <textarea name="message" id="message" placeholder="Message"></textarea>
                        <button className="button button-md button-dark" type="submit">Send Message</button>
                    </form>
                    {/* Submit result */}
                    {/* <div className="submit-result">
                        {submitStatus === 'success' && (
                            <span id="success">Thank you! Your Message has been sent.</span>
                        )}
                        {submitStatus === 'error' && (
                            <span id="error">Something went wrong. Please try again!</span>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Connect;
