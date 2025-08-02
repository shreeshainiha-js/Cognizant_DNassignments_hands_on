import React from 'react';
import './App.css';

function App() {
  const element = "Office Space";
  const imgSrc = "https://cdn-icons-png.freepik.com/512/6917/6917648.png"; // Placeholder image

  const jsxatt = <img src={imgSrc} width="25%" height="25%" alt="Office Space" />;

  // Single object for ItemName
  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // Conditional class logic based on rent
  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

  // List of office objects (for loop example)
  const officeList = [
    {
      Name: "DBS Business Center",
      Rent: 50000,
      Address: "Chennai",
      Image: "https://cf-cdn.cityinfoservices.com/public/uploads/project/images/large/8027762d105d26c548Kanakia%20Wall%20Street%20-%20Mumbai.jpg"
    },
    {
      Name: "Prestige Cyber Towers",
      Rent: 75000,
      Address: "Guindy, Chennai",
      Image: "http://farm3.staticflickr.com/2816/9588958562_0ec2b01b2d_b.jpg"
    },
    {
      Name: "DLF IT Park",
      Rent: 58000,
      Address: "Ramapuram, Chennai",
      Image: "https://cf-cdn.cityinfoservices.com/public/uploads/project/images/large/9697760e8366cd51ebDLF%20Cyber%20City%20-%20Block%202%20(Chennai).jpg"
    }
  ];

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      {/* JSX heading and image */}
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}

      {/* Single Object Display */}
      <h2>Single Office Details (Object)</h2>
      <h3>Name: {ItemName.Name}</h3>
      <h3 className={colors.join(' ')}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>

      <hr />

      {/* Multiple Objects Display */}
      <h2>All Office Listings</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {officeList.map((office, index) => {
          const rentClass = office.Rent <= 60000 ? 'textRed' : 'textGreen';
          return (
            <div key={index} style={{ border: '1px solid gray', padding: '15px', width: '250px', borderRadius: '10px' }}>
              <img src={office.Image} alt="Office" width="100%" height="150px" />
              <h3>{office.Name}</h3>
              <p>Address: {office.Address}</p>
              <p className={rentClass}>Rent: Rs. {office.Rent}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
