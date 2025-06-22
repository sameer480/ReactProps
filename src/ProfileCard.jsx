import React from "react";
const ProfileUser = ({ name, age }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    );
};

export default ProfileUser;