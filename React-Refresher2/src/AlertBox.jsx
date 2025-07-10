import React from 'react';

const AlertBox = (props) => (
    <div className="alert-box">
        {props.message}
        {props.type}
    </div>
);

export default AlertBox;