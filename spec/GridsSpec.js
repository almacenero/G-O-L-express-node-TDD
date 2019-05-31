var {gridRandom, NextGeneration, countNeighbors,drawGrid, genOfGrid } = require('./../src/app/gameGrid');

describe("RamdomGrid Test", function() {  
  const result = gridRandom(); 
   it(" Grid array initialization", function() {
    expect(result.length).toEqual(30);
  });  
 /* it(" Grid array range ", function() {
    expect(result[0].length).toBeTruthy()
  });  */
  it(" Fail test , myGrid array length it be > 0", function() {    
      const myGrid = new Array(10)
      expect(myGrid.length).not.toBe(0);
    }); 
  it(" Fail test , grid not to be null", function() {
      expect(result).not.toBeNull();
    }); 

  it(" Success test , grid return a value", function() {
      expect(result).toBeDefined();
    }); 
});

describe("NextGrid Test", function() {  
  const grid = [];
  const result = NextGeneration(grid);  
  
    it(" Success test , grid return next grid", function() {
      expect(result).toBeDefined()
    });
});

describe("CountNeighbors Test", function() {  
  const grid = [1,2,3];
  const x = 0;
  const y = 0;

    it(" Fail test , Total neighbors not to be null", function() {
      const result = countNeighbors(grid, x, y); 
      expect(result).not.toBeNull();
    }); 
   
    it(" Success test , grid return add", function() {
      const result = countNeighbors(grid, x, y) 
      expect(result).toBeDefined();
    });
});

describe("drawGrid Test", function() {  
  const ctx = {
    strokeStyle: () => "white",
    fillRect: () => "",
    strokeRect: () => ""
  };
  const grid = [3];

    it(" Fail test , drawGrid not to be null", function() {
      const result = drawGrid(ctx, grid); 
      expect(result).not.toBeNull();
    }); 
   
    it(" Success test , drawGrid ", function() {
      const result = drawGrid(ctx, grid) 
      expect(result).not.toBeDefined();
    });
});

describe("Gen Test", function() {  
  const ctx = {
    clearRect: ()=> "",
    strokeStyle: () => "white",
    fillRect: () => "",
    strokeRect: () => ""
  };
  const grid = [3];

    it(" Fail test , Gen not to be null", function() {
      const result = genOfGrid(ctx, grid); 
      expect(result).not.toBeNull();
    }); 

    it(" Fail test , Gen not to be 0", function() { 
      const result = genOfGrid(ctx, grid)    
      expect(result).not.toBe(0);
    }); 
   
    it(" Success test , Gen ", function() {
      const result = genOfGrid(ctx, grid) 
      expect(result).not.toBeDefined();
    });
}); 