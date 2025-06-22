import React from 'react';

const EventCard = ({ title, date, location }) => {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '16px auto',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    maxWidth: '300px',
    fontFamily: 'Arial, sans-serif'
  }
};

export default EventCard;
/**Create a functional component EventCard that accepts title, date, and location props. Use destructuring in the function parameter to directly extract these props and render them in a card. Use the component with sample data. */