import React from 'react';
import ProfileCard from './ProfileCard';

const App = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <ProfileCard name="John Doe" email="john@example.com" />
      <ProfileCard name="Jane Smith" email="jane@example.com" />
    </div>
  );
};

export default App;
