
const CellsInRow = 30

const gridRandom = () => {
  const myGrid = new Array(CellsInRow).fill()
  const myNewArray = myGrid.map(itemRow => {
    itemRow = new Array(CellsInRow).fill()
    return itemRow.map(itemCol => itemCol = Math.floor(Math.random() * 2))
  })
 return myNewArray;
}

const NextGeneration = (grid) => {
  const nextGrid = new Array(grid.length).fill()
  grid.forEach((val,row,array) => {
    nextGrid[row] = new Array(grid.length).fill()
     nextGrid[row].forEach((val,col,array)=>{
      const value = grid[row][col];
      const neighbors = countNeighbors(grid, row , col)
      if(value === 0 && neighbors === 3)  return nextGrid[row][col] = 1;
      if(value === 1 && (neighbors < 2 || neighbors > 3)) return nextGrid[row][col] = 0;
      nextGrid[row][col] = value;  
    })
  })
  return nextGrid
}


const countNeighbors = (grid, x, y) => {
  const nCols = grid[0].length;
  const nRows = grid.length;
  let add = 0;
   for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const row = (x + i + nRows) % nRows;
      const col = (y + j + nCols) % nCols;
      add += grid[row][col];
    }
  }
  add -= grid[x][y]; 
  return add;
};

//Animation 
  const fieldSize = 600;
  const cellSize = fieldSize / CellsInRow;

  const drawGrid = (ctx, grid) => {
    ctx.strokeStyle = 'red';
      grid.forEach((val,row,array)=>{
        grid.forEach((valueee,col,array)=>{
        const value = grid[row][col]
         if (value) {
          ctx.fillRect(row * cellSize, col * cellSize, cellSize, cellSize)
        } 
        ctx.strokeRect(row * cellSize, col * cellSize, cellSize, cellSize)
      })
    })
  }
  
  const genOfGrid = (ctx, grid) => {
    ctx.clearRect(0, 0, fieldSize, fieldSize);
    drawGrid(ctx, grid);
    const gridOfNextGeneration = NextGeneration(grid);
     setTimeout(() => {
      //console.log("Estoy entrando en el setTimeOut")
     requestAnimationFrame(() => genOfGrid(ctx, gridOfNextGeneration));
      }, 100); 
    }; 

  

 module.exports = {
  gridRandom, NextGeneration, countNeighbors, drawGrid, genOfGrid
} 