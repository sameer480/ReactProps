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
/**Write a functional component UserProfile that accepts a user prop (object with info containing name and email, and address containing city). Use destructuring to extract name, email, and city and render them. Use the component with a nested user object. */