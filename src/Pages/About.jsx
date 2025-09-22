import React from "react";
import "../Styles/About.css";
import aboutImg from "../assets/doctor-group.png";

const About = () => {
    const handleLearnMore = () => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-img">
                    <img src={aboutImg} alt="About Health Plus" />
                </div>
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>
                        Health Plus is a trusted name in healthcare, committed to providing
                        advanced medical facilities with a patient-first approach.
                    </p>
                    <div className="about-points">
                        <div className="point">
                            <span className="icon">✔️</span>
                            <p>24/7 Emergency Services</p>
                        </div>
                        <div className="point">
                            <span className="icon">✔️</span>
                            <p>Experienced Medical Professionals</p>
                        </div>
                        <div className="point">
                            <span className="icon">✔️</span>
                            <p>Modern Diagnostic Facilities</p>
                        </div>
                        <div className="point">
                            <span className="icon">✔️</span>
                            <p>Affordable & Accessible Care</p>
                        </div>
                    </div>
                    <button className="learn-more" onClick={handleLearnMore}>
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
