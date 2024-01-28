var HinhTron = /** @class */ (function () {
    function HinhTron(x, y, banKinh) {
        this.x = x;
        this.y = y;
        this.banKinh = banKinh;
    }
    HinhTron.prototype.tinhDienTich = function () {
        return Math.PI * Math.pow(this.banKinh, 2);
    };
    HinhTron.prototype.tinhChuVi = function () {
        return 2 * Math.PI * this.banKinh;
    };
    HinhTron.prototype.inKetQua = function () {
        var dienTich = this.tinhDienTich();
        var chuVi = this.tinhChuVi();
        return "H\u00ECnh tr\u00F2n c\u00F3 t\u00E2m O(".concat(this.x, ",").concat(this.y, ") v\u1EDBi b\u00E1n k\u00EDnh ").concat(this.banKinh, " c\u00F3 di\u1EC7n t\u00EDch v\u00E0 chu vi l\u1EA7n l\u01B0\u1EE3t l\u00E0 ").concat(dienTich.toFixed(3), " v\u00E0 ").concat(chuVi.toFixed(3), ".");
    };
    return HinhTron;
}());
// Test với tọa độ x=5, y=5 và bán kính 10.5
var hinhTron = new HinhTron(5, 5, 10.5);
var ketQua = hinhTron.inKetQua();
console.log(ketQua);
