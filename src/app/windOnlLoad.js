const {gridRandom,genOfGrid} = require('./gameGrid')


window.onload = () => {
  const cvs = document.getElementById('cvs');
  const grid = gridRandom();
  const ctx = cvs.getContext('2d');
  genOfGrid(ctx, grid);
};  