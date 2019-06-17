let message;// = 'abc';
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alt = (message as string).endsWith('c');

let log = function(message) {
    console.log(message);
}

// let doLog = (message) => {
//     console.log(message);
// }

let doLog = (msg) => console.log(msg); // lambda exp or arrow fxn
let doLogAgain = () => console.log(); // lambda exp or arrow fxn
