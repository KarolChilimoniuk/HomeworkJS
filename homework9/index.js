const gameDeck = require('./gameDeck');
const players = require('./players');
const newGame = require('./game');

newGame.game.gameTurns(gameDeck.cards, players.gamers);
