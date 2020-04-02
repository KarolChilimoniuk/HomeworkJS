'use strict'

/* 

// ------------------------- Zadanie 1

// funkcja do dokonania rozbicia stringa na elementy tablicy

const splitText = (text) => {
    return text.split("");
}

// wyciągnięcie substringów ze stringa

const getSubstrings = (destrText) => {
    const substrings = []
    let i = 0;
    while(i < destrText.length) {
        substrings.push(destrText[i]);
        let j = i;
        while( j < destrText.length) {
           let oneSubstring;
           if(j !== i ) {
            oneSubstring = substrings[substrings.length - 1] + destrText[j];
            substrings.push(oneSubstring);
           }
           j++;
        }
        i++;
    }
    return substrings;
}

// odwrócenie kolejności liter w substringach

const reverseSubstrings = (substrings) => {
   const reversedSubstrings = substrings.map(el => { return el.split("").reverse().join(""); console.log(el);
    });
    return reversedSubstrings;
}

// wyciągnięcie palindromów z substringów poprzez porównanie substringów z substringami z przestawioną kolejnością liter

const getPalindroms = (substrings, reversedSbst) => {
    const palindroms = [];
    for(let i = 0; i < substrings.length; i++) {
        (substrings[i] === reversedSbst[i]) && substrings[i].length > 1 ? palindroms.push(substrings[i]) : null;
    }
    return palindroms;
}

// ustalenie najdłuższgo palindromu

const getLongestPalindrom = (palindroms) => {
     const palindromsLength = [];
     let longestPalindrom = 0;
     palindroms.forEach(el => {
         longestPalindrom < el.length ? longestPalindrom = {
             palindrom: el,
             palindromLength: el.length
        } : null;
    });4
    return longestPalindrom;
}

// stworzenie klasy na której będziemy pracować 

class textWithPalindrom {
    constructor(text) {
        this.str = text;
    }
    getLongestPalindrom () {
        const destrText = splitText(this.str);
        const substrings = getSubstrings(destrText);
        const reversedFoundSubstrings = reverseSubstrings(substrings);
        const palindroms = getPalindroms(substrings, reversedFoundSubstrings);
        const longestPalindrom = getLongestPalindrom(palindroms);
        return longestPalindrom;
    }  
}

// tworzymy instancję klasy ze wskazaniem jaki string chcemy stworzyć

const text1 = new textWithPalindrom('berren');

// wywołanie metody z prototypu klasy, która wyrzuci nam informację o tym, który palindrom jest najdłuższy

console.log(text1.getLongestPalindrom()); */



// -------------------------- zadanie 2

// funkcja sluząca rozbiciu zdania na pojedyncze stringi a potem stringów na litery
const destructureText = (text) => {
    const divToSingleWords = text.split(" ");
    const destructuredTextToLetters = divToSingleWords.map(word => word.split(""));
    return destructuredTextToLetters;
}

// wyciągnięcie substringów z rozbitych na litery wyrazów
const getSubstrings = (destructuredToLetters) => {
    const substrings = [];
    destructuredToLetters.forEach(destrWord => {
        destrWord.forEach((wordLetter, j) => {
            destrWord.forEach((letter, i, arr) => {
                if(i >= j) {
                    if(arr[i] !== wordLetter) {
                        substrings.push(substrings[substrings.length-1] + arr[i]);
                    } else if (arr[i] === wordLetter) {
                            substrings.push(wordLetter);
                    }
                }
            }                
        )})
    })
    return substrings; 
}

// funkcja do wyciągnięcia subsekwencji. Jeśli coś się pojawia tylko raz w tablicy repeatedSubseq - nie powtarza się ani razu, natomiast jeśli substring pojawia się więcej niż 1 raz to ilość powtórek dzielimy przez ilość wyrazów w zdaniu/ilość stringów, aby uzyskać ilość powtórzeń danego substringa w tekście. W tej metodzie chcemy określić co pojawia sie więcej niż 1 raz dlatego tworzę też zmienne pomocnicze remainingSubseq i deletedSubseq.



 const getSubsequences = (text, substrings) => { 
    const splitText = text.split(" ");
    const repeatedSubseq = [];
    const remainingSubseq = [];
    const deleteSubseq = [];
    splitText.forEach(word => {
        substrings.forEach(substr => {
            word.includes(substr) && substr.length >= 2 ? repeatedSubseq.push(substr) : null;
        });
    });
    repeatedSubseq.forEach(subseq => {
        !deleteSubseq.includes(subseq) ? deleteSubseq.push(subseq) : remainingSubseq.push(subseq);
    })
    return remainingSubseq;
}

// ustalenie, które subsequence jest najdłuższy

const getLongestSubsequence = (subsequences) => {
    let length = 0;
    let longestSubseq;
    const longestSubsequences = [];
    subsequences.forEach(subseq => {
        if(subseq.length >= length) {
            longestSubseq = subseq;
            length = subseq.length
        }
    })
    subsequences.forEach(el => {
        el.length === longestSubseq.length && !longestSubsequences.includes(el) ? longestSubsequences.push(el) : null;
    })
    console.log(length);
    return longestSubsequences;
}

class Sentence {
    constructor(text) {
        this.sentence = text;
    }
    getLongestSubsequence () {
        const destructuredTextToLetters = destructureText(this.sentence);
        const sentenceSubstrings = getSubstrings(destructuredTextToLetters);
        const subsequences = getSubsequences(this.sentence, sentenceSubstrings);
        const longestSubsequence = getLongestSubsequence(subsequences);
        return longestSubsequence;
    }  
}

const strings = new Sentence(`jem ale się na najem`);
console.log(strings.getLongestSubsequence());










































/* function Text2 () {
      this.name = 'Karol';
      this.welcome = function() {
          return this.name;
      }
}

Text2.prototype.welcome2 = function() {
    return this.name;
}

class Text {
    constructor() {
        this.name = 'hey';
        this.sayName = () => {
            return this.name
        }
    }
    getName()  {
        return this.name;
    }
}

const welcome = new Text2();
const tekscik = new Text();

console.log(welcome);
console.log(welcome.welcome());
console.log(welcome.welcome2());


console.log(tekscik);
console.log(tekscik.sayName());
console.log(tekscik.getName()); */