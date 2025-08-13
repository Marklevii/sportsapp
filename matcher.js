export const players = [
  { name: 'Alice', sport: 'Tennis', level: 'Intermediate', location: 'New York' },
  { name: 'Bob', sport: 'Football', level: 'Advanced', location: 'London' },
  { name: 'Carlos', sport: 'Basketball', level: 'Beginner', location: 'Madrid' },
  { name: 'Diana', sport: 'Padel', level: 'Intermediate', location: 'Barcelona' },
  { name: 'Ethan', sport: 'Tennis', level: 'Advanced', location: 'Los Angeles' },
  { name: 'Fiona', sport: 'Basketball', level: 'Advanced', location: 'Toronto' }
];

export function filterPlayers(allPlayers, sport) {
  if (sport === 'all') return allPlayers;
  return allPlayers.filter((p) => p.sport === sport);
}
