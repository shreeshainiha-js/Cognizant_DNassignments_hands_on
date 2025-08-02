import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ['Kohli', 'Gill', 'Pant', 'Hardik', 'Bumrah'];
  const evenTeam = ['Rohit', 'Rahul', 'Iyer', 'Jadeja', 'Shami'];

  // Destructuring
  const [captain, ...othersOdd] = oddTeam;
  const [viceCaptain, ...othersEven] = evenTeam;

  const T20Players = ['Rohit', 'Gill', 'Hardik'];
  const RanjiPlayers = ['Iyer', 'Pant', 'Jadeja'];

  const mergedPlayers = [...T20Players, ...RanjiPlayers]; // Merge arrays

  return (
    <div>
      <h2>Odd Team</h2>
      <p>Captain: {captain}</p>
      <ul>
        {othersOdd.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h2>Even Team</h2>
      <p>Vice-Captain: {viceCaptain}</p>
      <ul>
        {othersEven.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h2>Merged T20 + Ranji Players</h2>
      <ul>
        {mergedPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
