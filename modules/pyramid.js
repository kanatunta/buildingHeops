const pyramid = bricks => {
  Array.prototype.columns = function() {
    return this[0].length;
  };
  const matrix = [];
  matrix.push([]);
  matrix[0] = [];
  matrix[0][0] = "0";

  let row = 0;
  let col = 0;

  //loop to n>1 , because we set pyramid[0][0]='0' alredy and use 1 brick
  while (bricks > 1) {
    if (row !== 0) {
      row--;
      col++;
    } else {
      row = col + 1;
      col = 0;
    }
    //console.log(row,col) //uncommet to trace index movement ...

    //add row or col id not exist
    if (!matrix[row]) {
      matrix.push([]);
    }
    if (!matrix[row][col]) {
      matrix[row].push([]);
    }

    //set cell
    matrix[row][col] = "0";

    //decrease number of bricks
    bricks--;
  }
  return matrix;
};

module.exports = pyramid;
