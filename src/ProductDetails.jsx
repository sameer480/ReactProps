import React from 'react';

const ProductDetails = ({ product }) => {
  const { name, price, category } = product;

  return (
    <div style={styles.container}>
      <h2>Product Details</h2>
      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Price:</strong> ${price}</li>
        <li><strong>Category:</strong> {category}</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '16px',
    maxWidth: '300px',
    margin: '20px auto',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  }
};

export default ProductDetails;
/**Write a functional component ProductDetails that accepts a product prop (object with name, price, and category). Render the product details in a list format. Use the component in an App component with a sample product object. */