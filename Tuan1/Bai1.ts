class Triangle {
    private sideA: number;
    private sideB: number;
    private sideC: number;

    constructor(a: number, b: number, c: number) {
        if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
            this.sideA = 0;
            this.sideB = 0;
            this.sideC = 0;
        } else {
            this.sideA = a;
            this.sideB = b;
            this.sideC = c;
        }
    }

    getSideA(): number {
        return this.sideA;
    }

    setSideA(a: number): void {
        if (a > 0) {
            this.sideA = a;
        }
    }

    getSideB(): number {
        return this.sideB;
    }

    setSideB(b: number): void {
        if (b > 0) {
            this.sideB = b;
        }
    }

    getSideC(): number {
        return this.sideC;
    }

    setSideC(c: number): void {
        if (c > 0) {
            this.sideC = c;
        }
    }

    calculatePerimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }

    calculateArea(): number {
        const s: number = this.calculatePerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }

    getTriangleType(): string {
        if (this.sideA === this.sideB && this.sideB === this.sideC) {
            return "Đều";
        } else if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA) {
            return "Cân";
        } else {
            return "Thường";
        }
    }

    toString(): string {
        return `Tam giác [a=${this.sideA}, b=${this.sideB}, c=${this.sideC}, loại=${this.getTriangleType()}, chu vi=${this.calculatePerimeter()}, diện tích=${this.calculateArea()}]`;
    }
}

function main(): void {
  
    const triangle1: Triangle = new Triangle(3, 4, 5);
    const triangle2: Triangle = new Triangle(1, 1, 2);  
    const triangle3: Triangle = new Triangle(5, 5, 5);
    const triangle4: Triangle = new Triangle(4, 4, 6);
    const triangle5: Triangle = new Triangle(7, 8, 9);

    console.log(triangle1.toString());
    console.log(triangle2.toString());
    console.log(triangle3.toString());
    console.log(triangle4.toString());
    console.log(triangle5.toString());
}


main();
