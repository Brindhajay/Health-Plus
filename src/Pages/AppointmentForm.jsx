import React, { useState } from "react";
import "../Styles/AppointmentForm.css";

const AppointmentForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", date: "", message: "" });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Appointment request submitted!");
        // Later: send data to backend or API
    };

    return (
        <section id="appointment-form" className="appointment-form">
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Your Name" onChange={handleChange} required />
                <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
                <input name="date" type="date" onChange={handleChange} required />
                <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
                <button type="submit" className="btn">Submit</button>
            </form>
        </section>
    );
};

export default AppointmentForm;
