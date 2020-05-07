class Player {
    constructor(id) {
        this.id = id,
        this.pairs = [],
        this.seenCards = []
    }
}

const handlePlayers = function() {
    let instance;
    class HandlePlayers {
        getRandomScope = () => {
            return Math.floor(Math.random()*(4-2+1)+2);
        }
        newPlayers = (func) => {
            const numberOfPlayers = func();
            const players = [];
            let i = 0;
                while(i < numberOfPlayers) {
                   players.push(new Player(i+1));
                   i++;
                }
            console.log(`Number of players: ${numberOfPlayers}`);
            return players;
        }
    }

    return {
        getPlayers: function() {
            if(!instance) {
                instance = new HandlePlayers()
            }
            return instance;
        }
    }
}();

const playersHandler = handlePlayers.getPlayers();
const gamePlayers = playersHandler.newPlayers(playersHandler.getRandomScope);

module.exports = {
    gamers: gamePlayers
}