import React from 'react';

// Functional component with default props
const Button = ({ text = "Click Me", color = "black" }) => {
  return (
    <button style={{ backgroundColor: color, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
      {text}
    </button>
  );
};

export default Button;
//Create a functional component Button that accepts text and color props. Set default props for text ("Click Me") and color ("blue"). Render a styled button using the props. Test the component with and without props in an App component.
