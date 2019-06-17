// changing interface to class
class Point1 {
    x: number;
    y: number;

    draw() {

    }
    getDistance(another: Point1) {

    } // when fxn is part of class, it is method
}

// defining shape of an object
interface Point1 {
    x: number,
    y: number
    draw: () => void // cannot have implementation, just signature (interface)
}

let drawPoint = (point: Point1) => {

}

let getDistance = (pointA: Point1, pointB: Point1) => {
    // ...
}

//                 // inline annotation, with object literal
// let drawPoint = (point: {x: number, y: number}) => {
//     // ...
// }

// drawPoint({
//     x: 1,
//     y: 2
// })

// drawPoint({
//     name: 'Olivia'
// })