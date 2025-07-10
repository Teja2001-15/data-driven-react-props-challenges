import React from "react";
import RecipeCard from "./RecipeCard.jsx";

const ProgressBar = ({ percentage }) => (
    <div className="progress-bar">
        <div className="progress-filled" style={{ width: `${percentage}%` }}></div>
        <span>{percentage}%</span>
    </div>
);

export default ProgressBar;