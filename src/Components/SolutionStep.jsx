import React from "react";
import "../Styles/SolutionStep.css";

const steps = [
    "Consult our doctors",
    "Get diagnosis",
    "Receive treatment",
    "Follow-up care"
];

const SolutionStep = () => {
    return (
        <section className="solution-steps">
            <h2>How It Works</h2>
            <ol>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </section>
    );
};

export default SolutionStep;
