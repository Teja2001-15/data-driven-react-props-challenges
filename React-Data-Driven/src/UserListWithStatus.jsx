import React from "react";

const UserListWithStatus = ({ users }) => (
    <ul className="user-list">
        {users.map(user => (
            <li key={user.id}>
                {user.name}
                <span
                    className="status-dot"
                    style={{ backgroundColor: user.isOnline ? 'green' : 'red' }}
                ></span>
            </li>
        ))}
    </ul>
);

export default UserListWithStatus;