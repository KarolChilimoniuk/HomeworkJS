// Zadanie 1

// String.prototype.reverse = function () {
//   console.log(this.split("").reverse().join(""));
// }

// const name = 'Karol';

// name.reverse();

// //Zadanie 2

// Number.prototype.reverse = function () {
//   console.log(this * -1)
// }

// const numb = 24225254;

// numb.reverse();
// (323423486576576576765869).reverse();

// Zadanie 3

const jsonFile = require("./Data.json");

// ----------------------------------------------------------------------- Funkcja, która zwraca JSON-a

const giveJSON = {
  giveJSON: () => JSON.stringify(jsonFile)
};

// Zamiana JSONA w obiekt

// const parsedJSON = JSON.parse(giveJSON.giveJSON());
// console.log(parsedJSON[2]); ------------ czy to w ogóle potrzebne, skoro samo jsonFile zwraca obiekt?

// ----------------------------------------------------------------------- Tworzymy strukturę do przechowywania danych

const DetailsOfPayent = function(x, y, z) {
  this.Type = x;
  this.company = y;
  this.date = z;
};
const mainData = function(a, b, c, x, y, z) {
  this.index = a;
  this._id = b;
  this.cost = c;
  this.detailsOfPayent = new DetailsOfPayent(x, y, z);
};

// -------------------------------------------------------------------- mapujemy dane z pliku json do struktury, którą przygotowaliśmy

const mappedData = jsonFile.map(el => {
  let data = new mainData(
    el.index,
    el._id,
    el.cost,
    el.detailsOfPayent.Type,
    el.detailsOfPayent.company,
    el.detailsOfPayent.date
  );
  return data;
}); // el index, _id, cost można wywołać poprzez el[i.index] itp.

// ------------------------------------------------------------------- ile pieniędzy wydano w 2014 r.?

const showHowMoney = () => {
  const expenses = mappedData
    .filter((el, i, array) => {
      if (el.detailsOfPayent.date.includes("2014")) {
        return el;
      }
    })
    .map(el => parseFloat(el.cost))
    .reduce((previous, current) => previous + current);
  // ---------------------- alternatywna metoda obliczania wydatków (dłuższa)
  // let expenses = 0;
  // .forEach(element => {
  //   spentMoney += parseFloat(element.cost, 10); // parseInt(number, 10) jeśli chcemy aby liczba była całkowita.
  // });
  // }).reduce((accumulator, current) => {
  //   accumulator += parseFloat(current.cost, 10);
  // }, 0);
  return expenses;
};

//---------------------------------------------------------------------------- Która firma zarobiła najwięcej

// Tworzymy konstruktor, który umożliwi nam stworzenie tablicy zawierającej obiekty posiadające tylko nazwę i wysokośc zarobków poszczególnych firm

function Company(company, earnings) {
  this.company = company;
  this.earnings = earnings;
}

// tworzymy funkcję, która wskaże która firma zarobiła najwięcej

const biggestEarning = () => {
  // ------------------ ...new Set przechwyca unikalne wartości każdego typu. Gdy w nawiasie wpiszemy samą nazwę obiektu iterowalnego to wrzuci nam wszystkie jego elementy w tę tablicę.

  // jsonFile.forEach((el, i, array) => {
  //   if (!companies.includes(el.detailsOfPayent.company)) {
  //     companies.push(el.detailsOfPayent.company);
  //   };
  // }); -------------------------------------------------------------------wersja alternatywna na stworzenie obiektu z nazwami firm

  const companies = [
    ...new Set(mappedData.map(el => el.detailsOfPayent.company))
  ]; // Tworzymy tablicę, która będzie zawierała nazwy wszystkich przedsiębiorstw

  // Używamy konstruktora stworzonego powyżej, aby wyłapać tylko nazwy firm i ich zarobki

  const companyEarnings = mappedData.map(
    el => new Company(el.detailsOfPayent.company, parseFloat(el.cost))
  );

  // Posługując się tablicą zawierającą nazwy firm oraz tablicą stworzoną za pomocą konstruktora zawierającą nazwy firm i zarobki filtrujemy firmy na poszczególne grupy, biorąc pod uwagę ich nazwy za pomoca metody filter(). Następnie mapujemy nowopowstałe tablice tak, aby zwrócono nam tylko wysokość zarobków z poszczególnych tablic zawierających i zarobki i nazwy. Na koniec dodajemy do siebie poszczególne kwoty zarobków osiągniętych przez firmy, aby określić ile łącznie zarobiła każda z nich za pomocą metody reduce().

  const companyOne = companyEarnings
    .filter(el => (el.company.includes(companies[0]) ? el : null))
    .map(el => el.earnings)
    .reduce((previous, current) => previous + current);
  const companyTwo = companyEarnings
    .filter(el => (el.company.includes(companies[1]) ? el : null))
    .map(el => el.earnings)
    .reduce((previous, current) => previous + current);
  const companyThree = companyEarnings
    .filter(el => (el.company.includes(companies[2]) ? el : null))
    .map(el => el.earnings)
    .reduce((previous, current) => previous + current);

  return companyOne > companyTwo && companyOne > companyThree
    ? console.log(`Najwięcej zarobiła firma ${companies[0]} - ${companyOne}`)
    : companyTwo > companyThree
    ? console.log(`Najwięcej zarobiła firma ${companies[1]} - ${companyTwo}`)
    : console.log(`Najwięcej zarobiła firma ${companies[2]} - ${companyThree}`);
};

// ------------------------------------------------------------------- Jaki typ transakcji miał jakie wydatki

// Tworzymy konstruktor, który przechowa informację o typie transakcji i jej wysokości

function Type(Type, cost) {
  this.Type = Type;
  this.cost = cost;
}

// Tworzymy funkcję, która wskaże nam jaki typ transakcji "zarobił" najwięcej

const whatTypeExpenses = () => {
  /* let values = []; // przechowa nam wartości poszczególnych transakcji już zsumowane
  let highest = 0; // korzystając z powyższej zmiennej ustalimy jaka jest największa suma zarobków */
  const transactions = [
    ...new Set(mappedData.map(el => el.detailsOfPayent.Type))
  ]; // tworzymy tablicę z informacją jakie były numery transakcji

  const mappedTypes = transactions.map(
    el =>
      new Type(
        el,
        mappedData
          .map(elem =>
            elem.detailsOfPayent.Type == el ? parseFloat(elem.cost) : null
          )
          .filter(values => (values != null ? values : null))
          .reduce((previous, current) => previous + current)
      )
  );
  return mappedTypes;
};

/* // W oparciu o konstruktor, tworzymy nowe obiekty tylko z informacją o tym, jaki jest numer transakcji i jaka kwota
  // określenie jak prezentują sie same kwoty po zsumowaniu
  const typeFirstCost = mappedTypes
    .filter(el => el.Type == transactions[0])
    .map(el => el.cost)
    .reduce((previous, current) => previous + current);
  const typeSecondCost = mappedTypes
    .filter(el => el.Type == transactions[1])
    .map(el => el.cost)
    .reduce((previous, current) => previous + current);
  const typeThirdCost = mappedTypes
    .filter(el => el.Type == transactions[2])
    .map(el => el.cost)
    .reduce((previous, current) => previous + current);
  const typeFourthCost = mappedTypes
    .filter(el => el.Type == transactions[3])
    .map(el => el.cost)
    .reduce((previous, current) => previous + current);
  const typeFifthCost = mappedTypes
    .filter(el => el.Type == transactions[4])
    .map(el => el.cost)
    .reduce((previous, current) => previous + current);

  // stworzenie obiektów w oparciu o konstruktor dla poszczególnych numeów transakcji z informacją ile łącznie przeznaczono na każdą z nich
  const typeFirst = new Type(transactions[0], typeFirstCost);
  const typeSecond = new Type(transactions[1], typeFirstCost);
  const typeThird = new Type(transactions[2], typeFirstCost);
  const typeFourth = new Type(transactions[3], typeFirstCost);
  const typeFifth = new Type(transactions[4], typeFirstCost);

  // tablica z wartościami transakcji po zsumowaniu
  values.push(
    typeFirstCost,
    typeSecondCost,
    typeThirdCost,
    typeFourthCost,
    typeFifthCost
  );

  // ustalenie jaka jest najwyższa kwota "zarobku"
  values.forEach((el, i, array) => {
    array[i] > highest ? (highest = array[i]) : highest;
  });

  // zwrócenie tablicy z numerem transakcji, które zarobiły najwięcej
  if ((typeFirst.cost = highest)) {
    return typeFirst;
  } else if ((typeSecond.cost = highest)) {
    return typeSecond;
  } else if ((typeThird.cost = highest)) {
    return typeThird;
  } else if ((typeFourth.cost = highest)) {
    return typeFourth;
  } else {
    return typeFifth;
  }
}; */

// --------------------------------------------------- Jakie wydatki w ciągu którego miesiąca miesiąca

const months = [
  ...new Set(mappedData.map(el => el.detailsOfPayent.date.slice(3, 5)))
];
console.log(months); // tworzymy tablicę, która wskaże miesiące jakie mamy w zestawieniach płatnści

function MonthExpenses(cost, date) {
  (this.cost = cost), (this.date = date);
} // struktura do przechowywania danych o kosztach i datach transakcji

const showMonthExpenses = () => {
  const monthName = month => {
    switch (month) {
      case "01":
        return "Styczeń";
        break;
      case "02":
        return "Luty";
        break;
      case "03":
        return "Marzec";
        break;
      case "04":
        return "Kwiecień";
        break;
      case "05":
        return "Maj";
        break;
      case "06":
        return "Czerwiec";
        break;
      case "07":
        return "Lipiec";
        break;
      case "08":
        return "Sierpień";
        break;
      case "09":
        return "Wrzesień";
        break;
      case "10":
        return "Październik";
        break;
      case "11":
        return "Listopad";
        break;
      case "12":
        return "Grudzień";
        break;
    }
  }; // instrukcja warunkowa, która zamienia cyfrową notację miesięcy w literalną

  const showMonthExpenses = months.map(
    elem =>
      new MonthExpenses(
        mappedData
          .map(item =>
            item.detailsOfPayent.date.includes(elem)
              ? parseFloat(item.cost)
              : null
          )
          .filter(el => (el = !null ? el : null))
          .reduce((previous, current) => previous + current),
        monthName(elem)
      )
  );
  return showMonthExpenses;
};

// -------------------------------------------------------------- Wydatki w poszczególnych dniach tygodnia

function setDayCost(date, cost) {
  this.date = date;
  this.cost = cost;
}

const changeDateOrder = date => {
  let dates = date;
  let splitDate = dates.split("-");
  let changedOrderData = [splitDate[1], splitDate[0], splitDate[2]];
  let joinedDate = new Date(changedOrderData.join("-"));
  let numberOfDay = joinedDate.getDay();
  return numberOfDay;
};

const getDays = day => {
  switch (day) {
    case 0:
      return "Niedziela";
      break;
    case 1:
      return "Poniedziałek";
      break;
    case 2:
      return "Wtorek";
      break;
    case 3:
      return "Środa";
      break;
    case 4:
      return "Czwartek";
      break;
    case 5:
      return "Piatek";
      break;
    case 6:
      return "Sobota";
      break;
  }
};

const dates = mappedData.map(el => changeDateOrder(el.detailsOfPayent.date));
const daysOfWeek = [...new Set(dates)].sort();

const showDayCost = () => {
  const daysCost = daysOfWeek.map(
    el =>
      new setDayCost(
        getDays(el),
        mappedData
          .map(elem =>
            changeDateOrder(elem.detailsOfPayent.date) === el
              ? parseFloat(elem.cost)
              : null
          )
          .filter(number => (number != null ? number : null))
          .reduce((previous, current) => previous + current)
      )
  );
  return daysCost;
};

//const dayExpenses = days.map()

const transactionsData = {
  values: () => {
    const expenses = showHowMoney();
    console.log(`W 2014 r. wydano łącznie ${expenses}`);
    biggestEarning();
    const typeExpenses = whatTypeExpenses();
    console.log(typeExpenses[2]);
    const month = showMonthExpenses();
    console.log(month[0]);
    const day = showDayCost();
    console.log(day[2]);
  }
};

transactionsData.values();
