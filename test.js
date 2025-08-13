import assert from 'node:assert/strict';
import { players, filterPlayers } from './matcher.js';

assert.equal(filterPlayers(players, 'Tennis').length, players.filter(p => p.sport === 'Tennis').length);
assert.equal(filterPlayers(players, 'Football').length, players.filter(p => p.sport === 'Football').length);
assert.equal(filterPlayers(players, 'all').length, players.length);

console.log('All tests passed.');
