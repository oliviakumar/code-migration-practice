// changing interface to class
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    }; // when fxn is part of class, it is method
    return Point;
}());
// let point: Point = new Point();
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
