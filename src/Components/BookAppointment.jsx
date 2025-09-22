import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

const BookAppointment = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/appointment"); // navigate to the appointment page
    };

    return (
        <section className="book-appointment">
            <h2>Need a Doctor?</h2>
            <p>Book your appointment in just a few clicks.</p>
            <button className="btn" onClick={handleClick}>Book Now</button>
        </section>
    );
};

export default BookAppointment;
