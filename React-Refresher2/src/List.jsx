import React from 'react';

function List({items}) {
    return (
        <div className="Vehicle">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default List;