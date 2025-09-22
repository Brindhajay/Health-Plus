import React from "react";
import "../Styles/Reviews.css";
// import the reviews array from Scripts folder
import { reviews } from "../Scripts/reviews";

const Reviews = () => {
    return (
        <section id="reviews" className="reviews">
            <h2>Patient Reviews</h2>
            <div className="reviews-container">
                {reviews.map((r) => (
                    <div key={r.id} className="review-card">
                        <h3>{r.name}</h3>
                        <p>{r.review}</p>
                        <p>{"⭐".repeat(r.rating)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
