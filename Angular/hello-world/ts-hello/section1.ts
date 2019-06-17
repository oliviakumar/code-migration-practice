// function log(message) {
//     console.log(message);
// }

// var message = 'hello';

// log(message);

// var number = 1;
let count = 2;
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[];
let e2: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

            // 0    // 1    // 2
// enum Color { Red, Green, Blue };
enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 };
let bgColor = Color.Red;

function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Finally: ' + i);
}

doSomething();

