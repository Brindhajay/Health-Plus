import React from "react";
import "../Styles/LegalDocs.css";
// Import data from Scripts
import { legalDocs } from "../Scripts/legaldocs";

const LegalDocs = () => {
    return (
        <section className="legal-docs">
            <h2>Legal Documents</h2>
            <div className="legal-docs-container">
                {legalDocs.map((doc) => (
                    <div key={doc.id} className="legal-doc-card">
                        <h3>{doc.title}</h3>
                        <p>{doc.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LegalDocs;
