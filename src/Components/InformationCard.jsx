import React from "react";
import "../Styles/InformationCard.css";

const InformationCard = ({ title, description }) => {
    return (
        <div className="information-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default InformationCard;
