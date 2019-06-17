class Point2 {
    // prefix constructor param with access-mod with private/public
        // --> generates field with name and inits field with arg val
    constructor(public x?: number, private y?: number) {
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getX() {
        return this.x;
    }

    setX(value) {
        if (value < 0) {
            throw new Error('value cannot be less than zero.');
        }
        this.x = value;
    }
}

let point2 = new Point2();
// point2.x = 3;
let
point2.draw();
