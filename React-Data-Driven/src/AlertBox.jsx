import React from 'react';

const AlertBox = ({ message, type }) => {
    const colors = {
        success: '#d4edda',
        warning: '#fff3cd',
        error: '#f8d7da',
    };
    return (
        <div style={{ backgroundColor: colors[type], padding: '1rem', borderRadius: '5px' }}>
            {message}
        </div>
    );
};

export default AlertBox;