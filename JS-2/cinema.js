class Seat {
    #isAvailable;

    constructor() {
      this.#isAvailable = true;
    }
  
    setReservedState(){
      this.#isAvailable = false;
    }
    
    setAvailableState(){
      this.#isAvailable = true;
    }
  
    getState() {
      return this.#isAvailable;
    }
  }
  
  class Cinema {
    #columns;
    #rows;
    #seats;
    constructor(columns, rows) {
      this.#columns = columns;
      this.#rows = rows;
      this.#seats = [];
      this.fillseats();
    }
  
    fillseats(){
        for (let i = 0; i < this.#rows; i++) {
            this.#seats[i] = [];
            for (let j = 0; j < this.#columns; j++) {
              this.#seats[i][j] = new Seat();
            }
          }
    }

    reserve(column, row) {
        if(this.#seats[row][column].getState()){
          this.#seats[row][column].setReservedState();
        }

        console.log("Seat reserved");
    }

    showCine() {
        let letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'];
        for (let i = 0; i < this.#rows; i++) {
          let row = '';
          for (let j = 0; j < this.#columns; j++) {
            row += "|" + letter[i] + j + "|";
            row += this.#seats[i][j].getState() ? "O" : "X";
            row += "|"
          }
          console.log(row);
        }
    }
}
  
  
  const cine = new Cinema(5,4);
  cine.reserve(2,2);
  cine.reserve(1,2);
  // cine.reserve(1,2);
  // cine.reserve(1,2);
  cine.reserve(0,0);

  cine.showCine()
