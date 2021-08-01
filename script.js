let UserName = prompt("put you username")

alert("welcome to our web stie"+" "+UserName)
document.write('<h2>' + UserName + '</h2>')

let favBook = prompt("what is your favorite book")
document.write('<h2>' + favBook + '</h2>')

let qu3 = prompt("why you interested in reading books")
document.write('<h2>' + qu3 + '</h2>')

let age = Number(prompt('please enter your age?'));
document.write('<h2>' + age + '</h2>')
console.log(typeof age);

age += 10;

console.log(age);
