var lieDetector = false;
console.log("Jeremy Kyle says the lie detector said " + lieDetector);
var x = 22;
var y = 10;
console.log("X+Y = " + (x + y));
var red = "Red";
console.log("The Color Red is" + red);
var list = [1, 2, 3];
console.log("The List contains" + list);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
