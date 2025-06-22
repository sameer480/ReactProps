import React from 'react';
import ProfileCard from './ProfileCard';
import ProductDetails from './ProductDetails';
import EventCard from './EventCard';
import UserProfile from './UserProfile';
import Button from './Button';
import Notification from './Notification';
import MovieCard from './MovieCard';
import TaskItem from './TaskItem';

const sampleProduct = {
  name: 'Bluetooth Speaker',
  price: 49.99,
  category: 'Electronics'
};
  const event = {
    title: 'React Workshop',
    date: 'June 30, 2025',
    location: 'Bangalore, India'
  };
  const sampleUser = {
    info: {
      name: 'Sameer Jawed',
      email: 'sameer@example.com'
    },
    address: {
      city: 'Mumbai'
    }
  };
const App = () => {
  

  return (
    <div>
      <h1>User Profile</h1>
      <ProfileCard name="John Doe" email="john@example.com" />
      <ProfileCard name="Jane Smith" email="jane@example.com" />
      <ProductDetails product={sampleProduct} />
      <EventCard title={event.title} date={event.date} location={event.location} />
      <UserProfile user={sampleUser} />
      <h2>Buttons Demo</h2>

      {/* Using default props */}
      <Button />

      <br /><br />

      {/* Using custom props */}
      <Button text="Submit" color="green" />
      <br /><br />
      <Button text="Delete" color="red" />
      <Notification config={{ message: "Form submitted!", type: "success" }} />

      {/* Partial prop (only message) */}
      <Notification config={{ message: "Missing something..." }} />

      {/* No props at all */}
      <Notification />
       <h1>Movie List</h1>

      {/* ✅ Valid props */}
      <MovieCard title="Inception" rating={8.8} genres={['Sci-Fi', 'Thriller']} />

      {/* ⚠️ Missing required title */}
      <MovieCard rating={7.2} genres={['Action']} />

      {/* ⚠️ Invalid rating type */}
      <MovieCard title="Matrix" rating="Nine" genres={['Action', 'Sci-Fi']} />

      {/* ⚠️ Invalid genres format */}
      <MovieCard title="Titanic" rating={7.8} genres="Romance, Drama" />
       <h2>Task List</h2>

      {/* ✅ Valid priorities */}
      <TaskItem task="Fix bugs" priority="high" />
      <TaskItem task="Write documentation" priority="medium" />
      <TaskItem task="Clean up code" priority="low" />

      {/* ❌ Invalid priority (console warning) */}
      <TaskItem task="Invalid task" priority="urgent" />
    
  
    </div>
  );
};

export default App;