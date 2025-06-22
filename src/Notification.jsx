import React from 'react';

const Notification = ({ config = {} }) => {
  // Destructure with defaults
  const {
    message = "No message",
    type = "info"
  } = config;

  const getStyle = () => {
    switch (type) {
      case "error":
        return { backgroundColor: "#f44336", color: "white" };
      case "success":
        return { backgroundColor: "#4CAF50", color: "white" };
      case "warning":
        return { backgroundColor: "#ff9D00", color: "white" };
      default:
        return { backgroundColor: "#2196D3", color: "white" }; // info
    }
  };

  return (
    <div style={{ ...styles.box, ...getStyle() }}>
    {/* //get Style funtion will take all the properties from styles.box and the style returned by getStyle function
    override the backgroundColor and color properties */}
      {message}
    </div>
  );
};

const styles = {
  box: {
    padding: "12px 20px",
    borderRadius: "6px",
    margin: "10px auto",
    width: "fit-content",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  }
};

export default Notification;
//Write a functional component Notification that accepts a config prop (object with message and type). Set default props for config with message ("No message") and type ("info"). Render the notification based on the props. Test with partial props.