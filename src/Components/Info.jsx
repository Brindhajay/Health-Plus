import React from "react";
import { infoData } from "../Scripts/info";
import InformationCard from "./InformationCard";
import "../Styles/Info.css";

const Info = () => {
    return (
        <section className="info">
            <div className="info-container">
                {infoData.map((item) => (
                    <InformationCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Info;
