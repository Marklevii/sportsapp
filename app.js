import { players, filterPlayers } from './matcher.js';

const select = document.getElementById('sport-select');
const list = document.getElementById('player-list');

function renderPlayers(sport) {
  const results = filterPlayers(players, sport);
  list.innerHTML = '';
  results.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.innerHTML = `<h3>${p.name}</h3>
      <p>${p.sport} • ${p.level}</p>
      <p>${p.location}</p>`;
    list.appendChild(card);
  });
}

select.addEventListener('change', (e) => {
  renderPlayers(e.target.value);
});

renderPlayers('all');
