/// <reference path="InheritFunction.js" />
/// <reference path="enginePower.js" />

function Wheel(radius) {
    this.radius = radius;
}

Wheel.inherit(PropulsionUnit);

Wheel.prototype.getAcceleration = function () {
    var acceleration = parseInt(2 * Math.PI * this.radius);
    return acceleration;
};