const helloWorld = () => console.log("New Hello World")
const add = (a,b) => console.log(a+b)
const subtitle = "Zajęcia backed";
const sample = () => "proba funkcji";

module.exports = {
    helloWorld,
    add,
    subtitle,
    sample
}

console.log("function.js loaded correctly");

