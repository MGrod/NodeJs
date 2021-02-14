const functions = require("./functions")

// console.log("Hello World")

// functions.add(1,2);
// functions.helloWorld()

const http = require("http");

const handler = (request, response) => {
    console.log("Funkcja działa");
    response.end("<h1> Hello World </h1> <h3> Siemka </h3> <p> Lorem </p>")
}

const server = http.createServer(handler);
const port = 3000;

server.listen(port, (err) => {
    if (err) { return console.log(`błąd ${err}`)}
    console.log(`serwer działa na porcie ${port}`)
})
