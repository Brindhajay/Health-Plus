import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
