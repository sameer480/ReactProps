import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ title, rating, genres }) => {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      {rating !== undefined && <p><strong>Rating:</strong> {rating}/10</p>}
      {Array.isArray(genres) && genres.length > 0 && (
        <p><strong>Genres:</strong> {genres.join(', ')}</p>
      )}
    </div>
  );
};

// ✅ PropTypes validation
MovieCard.PropTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string)
};

// ✅ Optional default props
MovieCard.defaultProps = {
  rating: undefined,
  genres: []
};
/**
 * PropTypes,defaultProps are special properties in React components that help with type checking and setting default values for props.
 */
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '12px',
    backgroundColor: '#f9f9f9',
    maxWidth: '400px',
    fontFamily: 'Arial'
  }
};

export default MovieCard;
//Create a functional component MovieCard that accepts title (string, required), rating (number), and genres (array). Use PropTypes to validate the props. Render the movie details. Test with valid and invalid props to see console warnings.
