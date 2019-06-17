// function log(message) {
//     console.log(message);
// }
// var message = 'hello';
// log(message);
// var number = 1;
var count = 2;
var a;
var b;
var c;
var d;
var e;
var e2 = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// 0    // 1    // 2
// enum Color { Red, Green, Blue };
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var bgColor = Color.Red;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
