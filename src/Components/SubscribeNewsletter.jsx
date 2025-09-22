import React, { useState } from "react";
import "../Styles/SubscribeNewsletter.css";

const SubscribeNewsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Subscribed with ${email}`);
        setEmail("");
    };

    return (
        <section className="subscribe">
            <h2>Subscribe to Our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className="btn">Subscribe</button>
            </form>
        </section>
    );
};

export default SubscribeNewsletter;
