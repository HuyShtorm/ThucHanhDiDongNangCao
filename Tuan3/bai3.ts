class HinhTron {
    private x: number;
    private y: number;
    private banKinh: number;

    constructor(x: number, y: number, banKinh: number) {
        this.x = x;
        this.y = y;
        this.banKinh = banKinh;
    }

    tinhDienTich(): number {
        return Math.PI * this.banKinh**2;
    }

    tinhChuVi(): number {
        return 2 * Math.PI * this.banKinh;
    }

    inKetQua(): string {
        const dienTich = this.tinhDienTich();
        const chuVi = this.tinhChuVi();

        return `Hình tròn có tâm O(${this.x},${this.y}) với bán kính ${this.banKinh} có diện tích và chu vi lần lượt là ${dienTich.toFixed(3)} và ${chuVi.toFixed(3)}.`;
    }
}

// Test với tọa độ x=5, y=5 và bán kính 10.5
const hinhTron = new HinhTron(5, 5, 10.5);
const ketQua = hinhTron.inKetQua();
console.log(ketQua);
