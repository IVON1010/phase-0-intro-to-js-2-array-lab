// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats)
console.log(cats);
function destructivelyAppendCat(name) {
    cats.push(name)
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
    cats.unshift(name)
}
destructivelyPrependCat("Rosebud");

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat("Aimy")

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
destructivelyRemoveFirstCat()

function appendCat(name) {
    return [...cats, name];
}
appendCat("Ruby")

function prependCat(name) {
    return [name,...cats];
}
prependCat("Gracie");

function removeFirstCat() {
    return cats.slice(1);
}
function removeLastCat() {
    return cats.slice(0, cats.length-1);
}
