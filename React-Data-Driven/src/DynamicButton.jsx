import React from "react";

const DynamicButton = ({ label, isDisabled = false, onClick }) => (
    <button disabled={isDisabled} onClick={onClick} className="dynamic-button">
        {label}
    </button>
);

export default DynamicButton;