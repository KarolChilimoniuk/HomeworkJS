// tablica zawierająca wartości kart

const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "As"
];

// tablica zawierająca kolory

const colors = ["kier", "karo", "pik", "trefl"];

// konstruktor dla kart

class Card {
  constructor(col, rank) {
    this.rank = rank;
    this.color = col;
  }
}

// tablica służąca do przechowywania kart

const cards = [];

// pętle służące do stworzenia obiektu karty i wpushowania go do tablicy przeznaczonej do przechowywania kart. Pierwsza pętla wpuszcza nas do tablicy zawierającej kolory, a z kolei pętla wpuszczająca na do wartości musi byc zadeklarowana w pierwszej. Inaczj nie uda się nam stworzyć obiektu karty.

colors.forEach((el, i, colors) => {
  ranks.forEach((elem, j, ranks) => {
    cards.push(new Card(colors[i], ranks[j]));
  });
});

// console.log(cards[40]);

// Funkcja losująca 5 kart, które stanowią nasz układ, na bazie którgo będziemy ustalać jaki układ pokerowy otrzymalismy.

const cardsLayout = () => {
  const cardLayout = [];
  const copiedCards = [...cards];
  for (let i = 0; i < 5; i++) {
    let randomCard =
      copiedCards[Math.floor(Math.random() * copiedCards.length)];
    cardLayout.push(randomCard);
    copiedCards.splice(copiedCards.indexOf(randomCard), 1);
  }
  return cardLayout;
};

// posortujmy karty dodając do nich wartości

const sortedCards = playerCards => {
  playerCards.forEach((el, i, array) => {
    if (array[i].rank === "2") {
      array[i].value = 1;
    } else if (array[i].rank === "3") {
      array[i].value = 2;
    } else if (array[i].rank === "4") {
      array[i].value = 3;
    } else if (array[i].rank === "5") {
      array[i].value = 4;
    } else if (array[i].rank === "6") {
      array[i].value = 5;
    } else if (array[i].rank === "7") {
      array[i].value = 6;
    } else if (array[i].rank === "8") {
      array[i].value = 7;
    } else if (array[i].rank === "9") {
      array[i].value = 8;
    } else if (array[i].rank === "10") {
      array[i].value = 9;
    } else if (array[i].rank === "J") {
      array[i].value = 10;
    } else if (array[i].rank === "Q") {
      array[i].value = 11;
    } else if (array[i].rank === "K") {
      array[i].value = 12;
    } else if (array[i].rank === "As") {
      array[i].value = 13;
    } else {
      array[i];
    }
  });
  const compare = (a, b) => {
    let valueA = a.value;
    let valueB = b.value;
    let comparison = 0;
    valueA > valueB ? (comparison = 1) : (comparison = -1);
    return comparison;
  };
  playerCards.sort(compare);
};

// Tablica do przechowywania nazw układów pokerowych

const pokerLayouts = [
  "Wysoka Karta",
  "Para",
  "Dwie pary",
  "Trójka",
  "Streight",
  "Kolor",
  "Full",
  "Kareta",
  "Poker",
  "Poker królewski"
];

// funkcje ustalająca ile wartości i kolorów się nam powtarza w układzie.
// ----------------------- RepeatedRanks przechowuje informacje o wartościach jakie się powtarzają(count repeating) oraz wskazuje ile kart występuje bez powtórek (showRepeatedRanks).

const showRepeatedRanks = playerCards => {
  const showRepeatedCardsRanks = [];
  const countRepeating = [];

  playerCards.forEach((el, i, arr) => {
    if (!showRepeatedCardsRanks.includes(arr[i].rank)) {
      showRepeatedCardsRanks.push(arr[i].rank);
    } else {
      countRepeating.push(arr[i].rank);
    }
  });
  // console.log(countRepeating);
  return countRepeating;
};

// --------------------- repeatedColors przechowuje informację o tym, ile kolorów występuje w układzie

const showRepeatedColors = playerCards => {
  const showRepeatedCardsColors = [];

  playerCards.forEach((el, i, arr) => {
    if (!showRepeatedCardsColors.includes(arr[i].color)) {
      showRepeatedCardsColors.push(arr[i].color);
    }
  });

  return showRepeatedCardsColors;
};

// ************************************  funkcje sprawdzające układ  *****************************************

// -------------------------------------------------- wysoka karta, dwie pary, trójka, full i kareta wymagają innego modelu działania funkcji niz zwykła paraz. Licznik powtórzeń tych samych wartości w układzie.

const repeating = playerCards => {
  let pairCounter = 0;
  playerCards.forEach((el, i, array) => {
    playerCards.forEach((elem, j, arr) => {
      if (array[i].rank === arr[j].rank) {
        pairCounter++;
      }
    });
  });
  return pairCounter;
};

// ------------------------------------------------------ streight, kolor, poker i poker królewski posiadają funkcje, które opierają się na tym samym sposobie określania układu. Funkcja value służy do określenia jakie wystepują różnice między wartościami kolejnych kart, nadanymi funkcją sortedCards

const values = playerCards => {
  let copiedYourCards = [...playerCards];
  sortedCards(copiedYourCards);
  let currentValue = copiedYourCards[0].value;
  let difference = [];
  for (let i = 1; i < copiedYourCards.length; i++) {
    if (copiedYourCards[i].value - currentValue == 1) {
      difference.push(copiedYourCards[i].value);
      currentValue = copiedYourCards[i].value;
    }
  }
  return {
    copiedYourCards: copiedYourCards,
    difference: difference
  };
};

// -------------------------------------------------------

// funkcja badająca czy otrzymany układ to wysoka karta

const ifHighCard = (playerCards, repeatedColors) => {
  const result = repeating(playerCards);
  const value = values(playerCards);
  return result === 5 &&
    repeatedColors.length !== 1 &&
    value.difference.length !== 4
    ? pokerLayouts[0]
    : `Nie jest wysoką kartą`;
};

// funkcja badająca czy otrzymany układ to para

const ifPair = (playerCards, repeatedRanks) => {
  const result = repeating(playerCards);
  return result === 7 && repeatedRanks.length === 1
    ? ` ${pokerLayouts[1]} ${repeatedRanks[0]}`
    : `Nie ma pary`;
};

//  funkcja badająca czy otrzymany układ to dwie pary

const ifTwoPairs = (playerCards, repeatedRanks) => {
  const result = repeating(playerCards);
  return result === 9 && repeatedRanks.length === 2
    ? `${pokerLayouts[2]} - para ${repeatedRanks[0]} i para ${repeatedRanks[1]}`
    : `Nie ma dwóch par`;
};

// funkcja badająca czy otrzymany układ to trójka

const ifThreeOfKind = (playerCards, repeatedRanks) => {
  const result = repeating(playerCards);
  return result === 11 && repeatedRanks.length === 2
    ? `${pokerLayouts[3]} ${repeatedRanks[0]}`
    : `Nie ma trójki`;
};

// funkcja badająca czy otrzymany układ to full

const ifFull = playerCards => {
  const result = repeating(playerCards);
  return result === 13 ? pokerLayouts[6] : `Nie jest fullem`;
};

// funkcja badająca czy otrzymany układ to kareta

const isFourOfKind = playerCards => {
  const result = repeating(playerCards);
  return result === 17 ? pokerLayouts[7] : `Nie jest karetą`;
};

// funkcja badająca czy otrzymany układ to streight

const ifStreight = (playerCards, repeatedColors) => {
  let result = values(playerCards);
  return result.difference.length === 4 && repeatedColors.length >= 2
    ? pokerLayouts[4]
    : `Nie jest streight`;
};

// funkcja badająca czy otrzymany układ to kolor

const ifFlush = (playerCards, repeatedColors) => {
  let result = values(playerCards);
  return repeatedColors.length === 1 && result.difference.length < 4
    ? `${pokerLayouts[5]} - ${repeatedColors[0]}`
    : `Nie jest kolorem`;
};

// funkcja badająca czy otrzymany układ to poker

const ifStreightFlush = (playerCards, repeatedColors) => {
  let result = values(playerCards);
  return result.copiedYourCards[0].value !== 9 &&
    result.difference.length === 4 &&
    repeatedColors.length === 1
    ? pokerLayouts[8]
    : `Nie jest pokerem`;
};

// funkcja badająca czy otrzymany układ to poker królewski

const ifRoyalFlush = (playerCards, repeatedColors) => {
  let result = values(playerCards);
  return result.copiedYourCards[0].value === 9 &&
    result.difference.length === 4 &&
    repeatedColors.length === 1
    ? pokerLayouts[9]
    : `Nie jest pokerem królewskim`;
};

//

const car = [
  {
    rank: "10",
    color: "kier"
  },
  {
    rank: "10",
    color: "karo"
  },
  {
    rank: "Q",
    color: "kier"
  },
  {
    rank: "10",
    color: "trefl"
  },
  {
    rank: "10",
    color: "pik"
  }
];

const yourCards = cardsLayout();
const repeatedRank = showRepeatedRanks(yourCards);
const repeatedColors = showRepeatedColors(yourCards);
const highCard = ifHighCard(yourCards, repeatedColors);
const pair = ifPair(yourCards, repeatedRank);
const twoPairs = ifTwoPairs(yourCards, repeatedRank);
const threeOfKind = ifThreeOfKind(yourCards, repeatedRank);
const streight = ifStreight(yourCards, repeatedColors);
const flush = ifFlush(yourCards, repeatedColors);
const full = ifFull(yourCards);
const fourOfKind = isFourOfKind(yourCards);
const streightFlush = ifStreightFlush(yourCards, repeatedColors);
const royalFlush = ifRoyalFlush(yourCards, repeatedColors);
console.log(
  yourCards,
  yourCards[0],
  yourCards[1],
  yourCards[2],
  yourCards[3],
  yourCards[4],
  yourCards[5]
);
console.log(
  repeatedRank,
  repeatedColors,
  highCard,
  pair,
  twoPairs,
  threeOfKind,
  streight,
  flush,
  full,
  fourOfKind,
  streightFlush,
  royalFlush
);
