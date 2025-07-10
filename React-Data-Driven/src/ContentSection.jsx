import React from "react";

const ContentSection = ({ title, children }) => (
    <section className="content-section">
        <h2>{title}</h2>
        {children}
    </section>
);

export default ContentSection