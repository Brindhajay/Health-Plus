import React from "react";
import "../Styles/Services.css";
import emergencyImg from "../assets/doctor-picture.png";
import heartImg from "../assets/doctor-group.png";
import covidImg from "../assets/doctor-book-appointment.png";

const Services = () => {
    const servicesData = [
        {
            title: "Emergency Care",
            img: emergencyImg,
            desc: "24/7 emergency services for critical situations",
        },
        {
            title: "Heart Disease",
            img: heartImg,
            desc: "Cardiac treatments & heart specialist consultations",
        },
        {
            title: "Covid Care",
            img: covidImg,
            desc: "Dedicated care and protocols during COVID-19",
        },
    ];

    return (
        <section id="services" className="services">
            <h2>Services We Provide</h2>
            <p className="services-subtitle">
                We offer a range of high-quality medical services to keep you and your family healthy.
            </p>
            <div className="services-grid">
                {servicesData.map((s, i) => (
                    <div className="service-card" key={i}>
                        <img src={s.img} alt={s.title} />
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
