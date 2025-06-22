import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task = "Unnamed Task", priority }) => {
  // Define background color based on priority
  const getBackgroundColor = () => {
    switch (priority) {
      case "low":
        return "#d4edda"; // green
      case "medium":
        return "#fff3cd"; // yellow
      case "high":
        return "#f8d7da"; // red
      default:
        return "#f0f0f0"; // fallback for invalid values
    }
  };

  return (
    <div style={{
      backgroundColor: getBackgroundColor(),
      padding: '12px',
      margin: '10px',
      borderRadius: '6px',
      fontFamily: 'Arial'
    }}>
      <strong>Task:</strong> {task} <br />
      <strong>Priority:</strong> {priority}
    </div>
  );
};

// ✅ Custom PropTypes validator
TaskItem.propTypes = {
  task: PropTypes.string,
  priority: function (props, propName, componentName) {
    const value = props[propName];
    const allowed = ["low", "medium", "high"];
    if (!allowed.includes(value)) {
      return new Error(
        `Invalid prop \`${propName}\` of value \`${value}\` supplied to \`${componentName}\`, expected one of ${JSON.stringify(allowed)}.`
      );
    }
  }
};

export default TaskItem;
//Write a functional component TaskItem that accepts a priority prop. Use PropTypes with a custom validator to ensure priority is one of "low", "medium", or "high". Render the task with a styled background based on priority. Test with invalid props.