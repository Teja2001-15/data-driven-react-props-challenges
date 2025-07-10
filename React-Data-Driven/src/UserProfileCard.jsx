import React from 'react';

const UserProfileCard = ({ name, email, avatarUrl }) => (
    <div className="profile-card">
        <img src={avatarUrl} alt={`${name}'s avatar`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
);

export default UserProfileCard;