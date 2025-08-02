import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 65 },
    { name: 'Rahul', score: 75 },
    { name: 'Gill', score: 45 },
    { name: 'Iyer', score: 90 },
    { name: 'Pant', score: 55 },
    { name: 'Hardik', score: 78 },
    { name: 'Jadeja', score: 72 },
    { name: 'Shami', score: 35 },
    { name: 'Bumrah', score: 82 },
    { name: 'Kuldeep', score: 88 }
  ];

  // Filter using arrow function: players with score < 70
  const below70Players = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score &lt; 70</h2>
      <ul>
        {below70Players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
