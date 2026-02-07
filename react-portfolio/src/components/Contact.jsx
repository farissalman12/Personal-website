import React from 'react';
import { motion } from 'framer-motion';
import { BackButton } from './ui/back-button';

const Contact = ({ isOpen, onClose }) => {
    const variants = {
        hidden: { opacity: 0, y: 50, pointerEvents: "none", transitionEnd: { display: "none" } },
        visible: { display: "block", opacity: 1, y: 0, pointerEvents: "auto" }
    };

    return (
        <motion.div 
            className="lightbox-wrapper" 
            id="contact" 
            variants={variants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, overflowY: 'auto' }}
        >
            <BackButton onClick={onClose} />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="lightbox-content">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-heading page-heading">
                                        <p className="section-description">Feel free to contact me anytimes</p>
                                        <h2 className="section-title">Get in Touch</h2>
                                        <div className="animated-bar"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-section single-section">
                                <div className="row">
                                    <div className="col-12 col-lg-7">
                                        <form className="contact-form" id="contact-form" onSubmit={(e) => e.preventDefault()}>
                                            <h4 className="content-title">Message Me</h4>
                                            <div className="row">
                                                <div className="col-12 col-md-6 form-group">
                                                    <input className="form-control" id="contact-name" type="text" name="name" placeholder="Name" required />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input className="form-control" id="contact-email" type="email" name="email" placeholder="Email" required />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <input className="form-control" id="contact-subject" type="text" name="subject" placeholder="Subject" required />
                                                </div>
                                                <div className="col-12 form-group form-message">
                                                    <textarea className="form-control" id="contact-message" name="message" placeholder="Message" rows="5" required></textarea>
                                                </div>
                                                <div className="col-12 form-submit">
                                                    <button className="btn w-full py-3 rounded-lg border border-foreground/10 bg-background text-foreground hover:bg-foreground hover:text-background transition-colors font-medium tracking-wide uppercase text-sm" id="contact-submit" type="submit">Send Message</button>
                                                    <p className="contact-feedback"></p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 col-lg-5">
                                        <div className="contact-info">
                                            <h4 className="content-title">Contact Info</h4>
                                            <p className="info-description">Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                                            <ul className="list-unstyled list-info">
                                                <li>
                                                    <div className="media align-items-center"><span className="info-icon"><i className="icon ion-logo-ionic text-foreground"></i></span>
                                                        <div className="media-body info-details">
                                                            <h6 className="info-type text-muted-foreground">Name</h6><span className="info-value text-foreground">Faris Salman</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media align-items-center"><span className="info-icon"><i className="icon ion-md-map text-foreground"></i></span>
                                                        <div className="media-body info-details">
                                                            <h6 className="info-type text-muted-foreground">Location</h6><span className="info-value text-foreground">Lahore, Punjab, Pakistan.</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media align-items-center"><span className="info-icon"><i className="icon ion-md-send text-foreground"></i></span>
                                                        <div className="media-body info-details">
                                                            <h6 className="info-type text-muted-foreground">Email Me</h6><span className="info-value"><a href="mailto:farishunzai@gmail.com" className="text-foreground hover:text-muted-foreground transition-colors">farishunzai@gmail.com</a></span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
