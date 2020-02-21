const sudoku = [
  [7, 0, 4, 8, 0, 0, 3, 0, 1],
  [8, 2, 0, 5, 0, 0, 0, 4, 0],
  [0, 0, 9, 4, 3, 0, 5, 0, 0],
  [3, 1, 0, 0, 0, 0, 8, 0, 7],
  [0, 8, 0, 0, 0, 0, 0, 1, 0],
  [9, 0, 7, 0, 0, 0, 0, 3, 2],
  [0, 0, 6, 0, 1, 5, 4, 0, 0],
  [0, 7, 0, 0, 0, 9, 0, 6, 5],
  [5, 0, 8, 0, 0, 2, 1, 0, 3]
];

const solveSudoku = sudoku => {
  let cantBeNumbers = null;
  let emptySpaces = 1;
  while (emptySpaces > 0) {
    emptySpaces = 0;
    for (let verti = 0; verti < sudoku.length; verti++) {
      let el = sudoku[verti];
      let box = null;
      for (let horiz = 0; horiz < el.length; horiz++) {
        box = el[horiz];
        //console.log(box);
        if (box === 0) {
          let cantBe = {};
          for (let k = 0; k < 9; k++) {
            if (el[k] > 0) {
              cantBe[el[k]] = true;
            }
            if (sudoku[k][horiz] > 0) {
              cantBe[sudoku[k][horiz]] = true;
            }
          }
          for (
            let vertiBox = Math.floor(verti / 3) * 3;
            vertiBox < Math.floor(verti / 3) * 3 + 3;
            vertiBox++
          ) {
            for (
              let horizBox = Math.floor(horiz / 3) * 3;
              horizBox < Math.floor(horiz / 3) * 3 + 3;
              horizBox++
            ) {
              if (sudoku[vertiBox][horizBox]) {
                cantBe[sudoku[vertiBox][horizBox]] = true;
              }
            }
          }
          cantBeNumbers = Object.keys(cantBe);
          if (cantBeNumbers.length === 8) {
            for (let i = 1; i < 10; i++) {
              if (cantBeNumbers.indexOf(i.toString()) == -1) {
                sudoku[verti][horiz] = i;
              } else {
                emptySpaces++;
              }
            }
          }
        }
      }
    }
  }
  return sudoku;
};

const result = solveSudoku(sudoku);
console.log(
  result,
  result[0],
  result[1],
  result[2],
  result[3],
  result[4],
  result[5],
  result[6],
  result[7],
  result[8]
);
