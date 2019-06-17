// changing interface to class
class Point {
    private x: number;
    y: number;

    // constructor is a method called when you create an instance of that class
    constructor(x?: number, y?: number) { // once a param is optional, all the params on right must be too
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    // getDistance(another: Point) {

    // } // when fxn is part of class, it is method
}

// let point: Point = new Point();
// let point = new Point(1, 2);
let point = new Point();
    // object *instance of a class
// point.x = 1;
// point.y = 2;

// access modifier - control access to fields, properties, and methods from the outside of class
// point.x = 3; // not allowed
point.draw();
