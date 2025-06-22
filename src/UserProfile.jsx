import React from 'react';

const UserProfile = ({ user }) => {
  // Destructuring nested properties
  const {
    info: { name, email },
    address: { city }
  } = user;

  return (
    <div style={styles.card}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '20px auto',
    borderRadius: '8px',
    maxWidth: '300px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif'
  }
};

export default UserProfile;
/**Create a functional component ProfileCard that accepts name and email props. Render a card displaying the name and email in a styled <div>. Use the component in an App component, passing sample data. */