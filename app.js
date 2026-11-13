// Question = 01

let players = [
    {
        name: "Ali",
        age: 20,
        game: "Cricket"
    },
    {
        name: "Ahmed",
        age: 22,
        game: "Football"
    },
    {
        name: "Usman",
        age: 21,
        game: "Hockey"
    }
];

players.push({
    name: "Hamza",
    age: 23,
    game: "Basketball"
});

console.log(players);

// Question = 02

let student = {
    name: "Ali",
    age: 20,
    course: "JavaScript"
};

console.log(`My name is ${student.name}`);
console.log(`My age is ${student.age}`);
console.log(`My course is ${student.course}`);

let fruits = ["Apple", "Mango", "Banana"];

console.log(`My first fruit is ${fruits[0]}`);
console.log(`My second fruit is ${fruits[1]}`);
console.log(`My third fruit is ${fruits[2]}`);

// Question = 03

function Player(name, game) {
    this.name = name;
    this.game = game;
}

Player.prototype.play = function () {
    console.log(`${this.name} plays ${this.game}`);
};

let player1 = new Player("Ali", "Cricket");
let player2 = new Player("Ahmed", "Football");

player1.play();
player2.play();
