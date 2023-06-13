function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const player1 = new Player("Lorem", "X");
const player2 = new Player("Ipsum", "O");

console.log(player1.name, "is the winner");
