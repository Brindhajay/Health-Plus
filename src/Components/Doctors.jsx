import React from "react";
import "../Styles/Doctors.css";
import prof1 from "../assets/profile-1.png";
import prof2 from "../assets/profile-2.png";
import prof3 from "../assets/profile-3.png";
import prof4 from "../assets/profile-4.png";

const doctorsData = [
    {
        name: "Dr. Emma Watson",
        spec: "Dermatologist",
        img: prof1,
        review: "4.9",
        reviewsCount: 120,
    },
    {
        name: "Dr. John Doe",
        spec: "Cardiologist",
        img: prof2,
        review: "4.7",
        reviewsCount: 95,
    },
    {
        name: "Dr. Sarah Lee",
        spec: "Pediatrician",
        img: prof3,
        review: "4.8",
        reviewsCount: 110,
    },
    {
        name: "Dr. Michael Brown",
        spec: "Neurologist",
        img: prof4,
        review: "4.6",
        reviewsCount: 80,
    },
];

function Doctors() {
    return (
        <section id="doctors" className="doctors">
            <h2>Our Doctors</h2>
            <p className="doctors-subtitle">
                Meet our expert doctors who are dedicated to providing the best healthcare.
            </p>
            <div className="doctor-grid">
                {doctorsData.map((d, i) => (
                    <div className="doctor-card" key={i}>
                        <img src={d.img} alt={d.name} />
                        <h3>{d.name}</h3>
                        <p className="spec">{d.spec}</p>
                        <div className="review">
                            <span className="stars">⭐⭐⭐⭐⭐</span>
                            <span>{d.review} ({d.reviewsCount} Reviews)</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Doctors;
