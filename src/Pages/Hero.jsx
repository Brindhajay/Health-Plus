import React from "react";
import "../Styles/Hero.css";
import heroImg from "../assets/doctor-picture.png";

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-text">
                <h3>❤️ Health comes first</h3>
                <h1>Your Trusted Health Partner</h1>
                <p>Book appointments with top doctors and get the best healthcare.</p>
                <a href="#services" className="btn">Explore Services</a>
            </div>
            <div className="hero-img">
                <img src={heroImg} alt="Doctor" />
            </div>
        </section>
    );
};

export default Hero;
