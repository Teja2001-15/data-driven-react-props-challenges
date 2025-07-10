import React from 'react';

const UserProfile = (props) => (
    <div className="user-profile">
        <h2>
        <img src={props.data.avatarUrl} alt="User Profile" align={"center"}/></h2>
        <div className="user-name"><h2>{props.data.name}</h2></div>
        <div className="user-email"><h3>{props.data.email}</h3></div>
    </div>
);

export default UserProfile;