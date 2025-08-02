import React from 'react';

const GuestPage = ({ onLogin }) => {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Please login to book your flight tickets.</p>
      <button onClick={onLogin}>Login</button>

      <h3>Available Flights:</h3>
      <ul>
        <li>Chennai → Delhi @ ₹3500</li>
        <li>Bangalore → Mumbai @ ₹2800</li>
        <li>Hyderabad → Kolkata @ ₹3200</li>
      </ul>
    </div>
  );
};

export default GuestPage;
