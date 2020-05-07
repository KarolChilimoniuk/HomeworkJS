const gameHandler = (function () {
    let instance;

    class Game {
        getRandomCardParams = (deck) => {
            let randomRowParam;
            let randomColumnParam;
            let stop = false;
            while(stop !== true) {
                randomRowParam = Math.floor(Math.random()*deck.length);
                randomColumnParam = Math.floor(Math.random()*deck[randomRowParam].length);
                if(deck[randomRowParam][randomColumnParam] !== "") {
                    stop = true;
                }
            }
            return {
                row: randomRowParam,
                column: randomColumnParam,
                figure: deck[randomRowParam][randomColumnParam]
            }
        }
        checkAvailabilityInSeenCards = (deck, player) => {
            let firstCardParams;
            let secondCardParams;
            firstCardParams = this.getRandomCardParams(deck);
            secondCardParams = player.seenCards.find(card => {
                return card.figure === firstCardParams.figure && (card.row !== firstCardParams.row || card.column !== firstCardParams.column)  ? card : null;
            });
            if(secondCardParams === undefined) {
                secondCardParams = this.getRandomCardParams(deck);
            }
            return {
                firstCardParams: firstCardParams,
                secondCardParams: secondCardParams
            }
        }
        filterSeenCardArray = (firstCardPar, secondCardPar, player) => {
            player.seenCards = player.seenCards.filter(cardParams => {
                return (cardParams !== firstCardPar && cardParams !== secondCardPar) ? cardParams : null;
            })
        }
        modifyCardRows = (deck, firstCardPar, secondCardPar) => {
            deck[firstCardPar.row] = deck[firstCardPar.row].map(figure =>  {
                  return (
                      figure === deck[firstCardPar.row][firstCardPar.column] ? "" : figure
                  )
                });
            deck[secondCardPar.row] = deck[secondCardPar.row].map(figure => { 
                  return (
                      figure === deck[secondCardPar.row][secondCardPar.column] ? "" : figure
                  )
               });
        }
    
        getWinner = (players) => {
            let i = 0;
            let theBestPlayers;
            let highestNumberOfPairs = 0;
            players.forEach(player => {
                player.pairs.length > highestNumberOfPairs ? highestNumberOfPairs = player.pairs.length : null;
            });
            theBestPlayers = players.filter(player => {
                return player.pairs.length >= highestNumberOfPairs ? player : null;
            })
            return theBestPlayers;
        }
        gameTurns = (deck, players) => {
            let stop = false;
            while(stop !== true) {
               let contentChecker;
               for(let player of players) {
                   let firstCardParams;
                   let secondCardParams;
                   if(player.seenCards.length > 0) {
                      const cardsParams = this.checkAvailabilityInSeenCards(deck, player);
                      firstCardParams = cardsParams.firstCardParams;
                      secondCardParams = cardsParams.secondCardParams;
                   } else {
                      firstCardParams = this.getRandomCardParams(deck);
                      secondCardParams = this.getRandomCardParams(deck);
                   }
                   const firstCard = deck[firstCardParams.row][firstCardParams.column];
                   const secondCard = deck[secondCardParams.row][secondCardParams.column];
                   if(firstCard === secondCard && (firstCardParams.row !== secondCardParams.row || firstCardParams.column !== secondCardParams.column)) {
                       console.log(`Player nr ${player.id} took a pair of ${firstCard}`);
                       this.filterSeenCardArray(firstCardParams, secondCardParams, player);
                       this.modifyCardRows(deck, firstCardParams, secondCardParams);
                       player.pairs.push(firstCard);
                   } else {
                       if(player.seenCards.includes(firstCardParams) && !player.seenCards.includes(secondCardParams)) {
                         player.seenCards.push(secondCardParams);
                       } else if(player.seenCards.includes(secondCardParams) && !player.seenCards.includes(firstCardParams)) {
                         player.seenCards.push(firstCardParams);
                       } else {
                        player.seenCards.push(firstCardParams, secondCardParams);
                       }
                       console.log(`Player nr ${player.id} haven't found a pair`);
                   }
                   contentChecker = deck.every(row => row.every(cell => cell === ""));
                   if(contentChecker === true) {
                       const winner = this.getWinner(players);
                       winner.forEach(player => { 
                         console.log(`The winner is player nr ${player.id}. He found ${player.pairs.length} pairs`);
                        });
                       stop = true;
                       break;
                    }
                }
            }
        }
    }
    return {
        createGameHandler: function() {
            if(!instance) {
                instance = new Game();
            }
            return instance;
        }
    }
})();

const game = gameHandler.createGameHandler();

module.exports = {
    game: game
}