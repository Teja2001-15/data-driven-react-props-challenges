import React from 'react';

const HouseTable = (props) => (
    <table className="table">
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
        </tr>
        </thead>
        <tbody>
        {props.data.map(house => (
            <tr key={house.id}>
                <td>{house.id}</td>
                <td>{house.name}</td>
                <td>{house.address}</td>
            </tr>
        ))}
        </tbody>
    </table>
);

export default HouseTable;