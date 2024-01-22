var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
            this.sideA = 0;
            this.sideB = 0;
            this.sideC = 0;
        }
        else {
            this.sideA = a;
            this.sideB = b;
            this.sideC = c;
        }
    }
    Triangle.prototype.getSideA = function () {
        return this.sideA;
    };
    Triangle.prototype.setSideA = function (a) {
        if (a > 0) {
            this.sideA = a;
        }
    };
    Triangle.prototype.getSideB = function () {
        return this.sideB;
    };
    Triangle.prototype.setSideB = function (b) {
        if (b > 0) {
            this.sideB = b;
        }
    };
    Triangle.prototype.getSideC = function () {
        return this.sideC;
    };
    Triangle.prototype.setSideC = function (c) {
        if (c > 0) {
            this.sideC = c;
        }
    };
    Triangle.prototype.calculatePerimeter = function () {
        return this.sideA + this.sideB + this.sideC;
    };
    Triangle.prototype.calculateArea = function () {
        var s = this.calculatePerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    };
    Triangle.prototype.getTriangleType = function () {
        if (this.sideA === this.sideB && this.sideB === this.sideC) {
            return "Đều";
        }
        else if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA) {
            return "Cân";
        }
        else {
            return "Thường";
        }
    };
    Triangle.prototype.toString = function () {
        return "Tam gi\u00E1c [a=".concat(this.sideA, ", b=").concat(this.sideB, ", c=").concat(this.sideC, ", lo\u1EA1i=").concat(this.getTriangleType(), ", chu vi=").concat(this.calculatePerimeter(), ", di\u1EC7n t\u00EDch=").concat(this.calculateArea(), "]");
    };
    return Triangle;
}());
function main() {
    var triangle1 = new Triangle(3, 4, 5);
    var triangle2 = new Triangle(1, 1, 2);
    var triangle3 = new Triangle(5, 5, 5);
    var triangle4 = new Triangle(4, 4, 6);
    var triangle5 = new Triangle(7, 8, 9);
    console.log(triangle1.toString());
    console.log(triangle2.toString());
    console.log(triangle3.toString());
    console.log(triangle4.toString());
    console.log(triangle5.toString());
}
main();
