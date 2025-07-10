import React from "react";

const FeatureList = ({ features }) => (
    <ul className="feature-list">
        {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
        ))}
    </ul>
);

export default FeatureList;