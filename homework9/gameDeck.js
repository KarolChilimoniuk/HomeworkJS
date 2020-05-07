const cardDeck = (function() {
    let instance;

    class Deck {
        constructor() {
          this.deck = [
            ["", "", "", "", "", ""],
            ["", "", "", "", "", ""],
            ["", "", "", "", "", ""],
            ["", "", "", "", "", ""]
          ];
        }
    }

    return {
        getDeck: function() {
          if(!instance) {
            instance = new Deck();
          }
          return instance;
        }
    }
})();


const makeFiguresHandler = (function() {
    let instance;

    class FiguresHandler {
        createFiguresObjects = (figures) => {
            return figures.map(figure => {
                return {
                    figure: figure,
                    amountCounter: 0
                }
            })
        }
    
        addFiguresToDeck = (deck, figures, func) => {
            let figuresObjects = func(figures);
            deck.forEach((row,i) => {
                let column = 0;
                while(column < deck[i].length) {
                     const randomFigure = figuresObjects[Math.floor(Math.random() * figuresObjects.length)];
                     if(randomFigure.amountCounter < 2) {
                         row[column] = randomFigure.figure;
                         randomFigure.amountCounter++;
                         column++;
                     } else {
                         figuresObjects = figuresObjects.filter(figObject => figObject.amountCounter < 2);
                     }
                 };
            })
        }
    }

    return {
        handleFigures: function() {
          if(instance) {
              return instance;
          }
          return instance = new FiguresHandler();
        }
    }
})();

const figures = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "+", "-", "_"];
const gameDeck = cardDeck.getDeck();
const figuresHandler = makeFiguresHandler.handleFigures();

figuresHandler.addFiguresToDeck(gameDeck.deck, figures, figuresHandler.createFiguresObjects);

module.exports = {
    cards: gameDeck.deck
}

