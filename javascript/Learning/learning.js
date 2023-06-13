function Player(name, marker) {
  this.name = name;
  this.marker = marker;

  this.sayName = function () {
    console.log(name);
  };
}

const player1 = new Player("Lorem", "X");
const player2 = new Player("Ipsum", "O");

console.log(player1.name, "is the winner");
player2.sayName();
