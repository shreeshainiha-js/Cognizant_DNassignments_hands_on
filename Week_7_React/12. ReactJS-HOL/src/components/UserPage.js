import React from 'react';

const UserPage = ({ onLogout }) => {
  return (
    <div>
      <h2>Welcome Back, User!</h2>
      <p>You are now logged in and can book tickets.</p>
      <button onClick={onLogout}>Logout</button>

      <h3>Book Your Flights:</h3>
      <ul>
        <li>
          Chennai → Delhi
          <button style={{ marginLeft: '10px' }}>Book</button>
        </li>
        <li>
          Bangalore → Mumbai
          <button style={{ marginLeft: '10px' }}>Book</button>
        </li>
        <li>
          Hyderabad → Kolkata
          <button style={{ marginLeft: '10px' }}>Book</button>
        </li>
      </ul>
    </div>
  );
};

export default UserPage;
