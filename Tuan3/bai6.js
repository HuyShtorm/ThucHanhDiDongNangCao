var HocVien = /** @class */ (function () {
    function HocVien(hoTen, diaChi, soDienThoai) {
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.soDienThoai = soDienThoai;
    }
    HocVien.prototype.getHoTen = function () {
        return this.hoTen;
    };
    HocVien.prototype.toString = function () {
        return "HocVien: ".concat(this.hoTen, ", DiaChi: ").concat(this.diaChi, ", SoDienThoai: ").concat(this.soDienThoai);
    };
    return HocVien;
}());
var KhoaHoc = /** @class */ (function () {
    function KhoaHoc(tenKhoaHoc, ngayMoKhoaHoc, thoiGianHoc) {
        this.tenKhoaHoc = tenKhoaHoc;
        this.ngayMoKhoaHoc = ngayMoKhoaHoc;
        this.thoiGianHoc = thoiGianHoc;
        this.dsHocVien = [];
    }
    KhoaHoc.prototype.themHocVien = function (hocVien) {
        if (this.dsHocVien.length < 20) {
            this.dsHocVien.push(hocVien);
        }
        else {
            console.log("Khong the them hoc vien. Khoa hoc da day!");
        }
    };
    KhoaHoc.prototype.timKiemHocVien = function (hoTen) {
        for (var _i = 0, _a = this.dsHocVien; _i < _a.length; _i++) {
            var hocVien = _a[_i];
            if (hocVien.getHoTen() === hoTen) {
                return hocVien;
            }
        }
        return null;
    };
    KhoaHoc.prototype.daKetThucKhoaHoc = function () {
        // Giả sử ngày hiện tại là "2024-01-23"
        var ngayHienTai = new Date("2024-01-23");
        var ngayKetThuc = new Date(this.ngayMoKhoaHoc);
        return ngayHienTai > ngayKetThuc;
    };
    KhoaHoc.prototype.chuaBatDauKhoaHoc = function () {
        // Giả sử ngày hiện tại là "2024-01-23"
        var ngayHienTai = new Date("2024-01-23");
        var ngayMo = new Date(this.ngayMoKhoaHoc);
        return ngayHienTai < ngayMo;
    };
    KhoaHoc.prototype.toString = function () {
        return "KhoaHoc: ".concat(this.tenKhoaHoc, ", NgayMo: ").concat(this.ngayMoKhoaHoc, ", ThoiGianHoc: ").concat(this.thoiGianHoc, ", SoHocVien: ").concat(this.dsHocVien.length);
    };
    return KhoaHoc;
}());
var TrungTamDaoTao = /** @class */ (function () {
    function TrungTamDaoTao() {
        this.dsKhoaHoc = [];
    }
    TrungTamDaoTao.prototype.themKhoaHoc = function (khoaHoc) {
        this.dsKhoaHoc.push(khoaHoc);
    };
    TrungTamDaoTao.prototype.timKhoaHoc = function (tenKhoaHoc) {
        for (var _i = 0, _a = this.dsKhoaHoc; _i < _a.length; _i++) {
            var khoaHoc = _a[_i];
            if (khoaHoc.toString().includes(tenKhoaHoc)) {
                return khoaHoc;
            }
        }
        return null;
    };
    TrungTamDaoTao.prototype.hocVienDaTungHoc = function (hoTen) {
        var khoaHocHocVienDaTungHoc = [];
        for (var _i = 0, _a = this.dsKhoaHoc; _i < _a.length; _i++) {
            var khoaHoc = _a[_i];
            if (khoaHoc.timKiemHocVien(hoTen) !== null) {
                khoaHocHocVienDaTungHoc.push(khoaHoc);
            }
        }
        return khoaHocHocVienDaTungHoc;
    };
    TrungTamDaoTao.prototype.khoaHocChuaKetThuc = function () {
        var khoaHocChuaKetThuc = [];
        for (var _i = 0, _a = this.dsKhoaHoc; _i < _a.length; _i++) {
            var khoaHoc = _a[_i];
            if (!khoaHoc.daKetThucKhoaHoc()) {
                khoaHocChuaKetThuc.push(khoaHoc);
            }
        }
        return khoaHocChuaKetThuc;
    };
    TrungTamDaoTao.prototype.khoaHocChuaBatDau = function () {
        var khoaHocChuaBatDau = [];
        for (var _i = 0, _a = this.dsKhoaHoc; _i < _a.length; _i++) {
            var khoaHoc = _a[_i];
            if (khoaHoc.chuaBatDauKhoaHoc()) {
                khoaHocChuaBatDau.push(khoaHoc);
            }
        }
        return khoaHocChuaBatDau;
    };
    TrungTamDaoTao.prototype.toString = function () {
        var result = "Danh sach Khoa Hoc:\n";
        for (var _i = 0, _a = this.dsKhoaHoc; _i < _a.length; _i++) {
            var khoaHoc = _a[_i];
            result += khoaHoc.toString() + "\n";
        }
        return result;
    };
    return TrungTamDaoTao;
}());
// Example Usage
var hocVien1 = new HocVien("Nguyen Van A", "Ha Noi", "123456789");
var hocVien2 = new HocVien("Tran Thi B", "Ho Chi Minh", "987654321");
var hocVien3 = new HocVien("Le Van C", "Da Nang", "111222333");
var khoaHoc1 = new KhoaHoc("Khoa Hoc Java", "2024-01-20", "18:00 - 20:00");
var khoaHoc2 = new KhoaHoc("Khoa Hoc Python", "2024-02-05", "19:00 - 21:00");
khoaHoc1.themHocVien(hocVien1);
khoaHoc1.themHocVien(hocVien2);
khoaHoc2.themHocVien(hocVien3);
var trungTam = new TrungTamDaoTao();
trungTam.themKhoaHoc(khoaHoc1);
trungTam.themKhoaHoc(khoaHoc2);
console.log(trungTam.toString());
// Test other functionalities
console.log("Tim Khoa Hoc: " + trungTam.timKhoaHoc("Java"));
console.log("Hoc vien da tung hoc: " + trungTam.hocVienDaTungHoc("Nguyen Van A"));
console.log("Khoa hoc chua ket thuc: " + trungTam.khoaHocChuaKetThuc());
console.log("Khoa hoc chua bat dau: " + trungTam.khoaHocChuaBatDau());
