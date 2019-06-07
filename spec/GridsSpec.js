const {gridRandom, NextGeneration, countNeighbors,drawGrid, genOfGrid} = require('../src/pub/app/gameGrid');

const gridR = gridRandom(); 
const myGrid = [[ 0, 1, 0, 1 ], [ 0, 0, 1, 1 ],[ 1, 0, 1, 1 ]]
const myGridfour= [ 
  [ 0, 1, 0, 1 ], 
  [ 0, 0, 1, 1 ],
  [ 0, 0,0, 1 ] ,
  [ 1, 0, 1, 1 ] ]
const mysNextGird= [ 
[ 0, 1, 0, 0 ], 
[ 0, 0, 0, 1 ], 
[ 0, 1, 0, 0 ], 
[ 0, 1, 0, 0 ] ]
//var estado siguiente
describe("Initial State", function(){
  fit("NextGen return", function(){
    expect(NextGeneration(myGridfour)).toEqual(mysNextGird)
  })
  
});

describe("RamdomGrid Test", function() {  
  it(" Grid array initialization", function() {
    expect(gridR.length).toEqual(30);
  });  

 it(" Grid array range ", function() {
    expect(gridR[0][0] >= 0 && gridR[0][0] <= 1).toBeTruthy()
  });

  it(" Fail test , grid not to be null", function() {
      expect(gridR).not.toBeNull();
    }); 
});

describe("NextGrid Test", function() {  
  const nextG = NextGeneration(myGrid);  
    it(" Next grid only take a value: 1 or 0 ", function() {
      expect(nextG[0][0] === 0 || nextG[0][0] === 1).toBeTruthy()
    });
});

describe("CountNeighbors Test", function() {  
  
  const x = 0;
  const y = 0;

    it(" Count Neighbors cant take a value 0 ", function() {
      const cNeigh = countNeighbors(gridR, x, y); 
      expect(cNeigh).not.toEqual(0);
    }); 
    it(" Count Neighbors its a number type", function() {
      const cNeigh = countNeighbors(myGrid, x, y); 
      expect(cNeigh).not.toBeNaN();
    }); 
    
});

describe("drawGrid Test", function() {  
  const ctx = {
    strokeStyle: () => "white",
    fillRect: () => "",
    strokeRect: () => ""
  };
 
  beforeEach(function(){
    spyOn(ctx, "fillRect")
    spyOn(ctx, "strokeRect")
  })
  
  it(" ctx.fillRect test...", function() {
      drawGrid(ctx, gridR) 
      expect(ctx.fillRect).toHaveBeenCalled()
    }); 

  it(" ctx.strokeRect test...", function() {
      drawGrid(ctx, gridR) 
      expect(ctx.strokeRect).toHaveBeenCalled()
    });
});

describe("GenOfGrid Test", function() {  
  const ctx = {
    strokeStyle: () => "white",
    fillRect: () => "",
    strokeRect: () => "", 
    clearRect: () => ""
  }; 
  const gameGrid = require('../src/pub/app/gameGrid');
  beforeEach(function(){
   
    spyOn(ctx, "clearRect")
    spyOn(gameGrid, "drawGrid");
  })
 
  it(" ctx.clearRect test...", function() {
      genOfGrid(ctx, gridR) 
      expect(ctx.clearRect).toHaveBeenCalledWith(0, 0, 600, 600)
  }); 
  
  /* it(" Calls drawGrid test...", function() {
    console.log("gen grid: ", gameGrid.drawGrid)
    gameGrid.genOfGrid(ctx, gridR) 
      expect(gameGrid.drawGrid).toHaveBeenCalled()
  }); */ 
  
}); 

/* describe("Test settTimeout in genOfGrid", function() {
 
   const window = {
    setTimeout: () => "",
    requestAnimationFrame: requestAnimationFrame
  };  
  const ctx = {
    strokeStyle: () => "white",
    fillRect: () => "",
    strokeRect: () => "", 
    clearRect: () => ""
  }; 
 beforeEach(function() {
    jasmine.clock().install(); 
      spyOn(window, "requestAnimationFrame");
      spyOn(window, "setTimeout");
      spyOn(ctx, "clearRect");
    });
 afterEach(function() {
    jasmine.clock().uninstall();
    }); 

  fit("test setTimeout run", function(){
   
    genOfGrid(ctx, gridR);
    
    jasmine.clock().tick(110);
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });
});  */
