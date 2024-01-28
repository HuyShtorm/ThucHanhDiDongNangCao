class HocVien {
    private hoTen: string;
    private diaChi: string;
    private soDienThoai: string;

    constructor(hoTen: string, diaChi: string, soDienThoai: string) {
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.soDienThoai = soDienThoai;
    }

    getHoTen(): string {
        return this.hoTen;
    }

    toString(): string {
        return `HocVien: ${this.hoTen}, DiaChi: ${this.diaChi}, SoDienThoai: ${this.soDienThoai}`;
    }
}

class KhoaHoc {
    private tenKhoaHoc: string;
    private ngayMoKhoaHoc: string;
    private thoiGianHoc: string;
    private dsHocVien: HocVien[];

    constructor(tenKhoaHoc: string, ngayMoKhoaHoc: string, thoiGianHoc: string) {
        this.tenKhoaHoc = tenKhoaHoc;
        this.ngayMoKhoaHoc = ngayMoKhoaHoc;
        this.thoiGianHoc = thoiGianHoc;
        this.dsHocVien = [];
    }

    themHocVien(hocVien: HocVien): void {
        if (this.dsHocVien.length < 20) {
            this.dsHocVien.push(hocVien);
        } else {
            console.log("Khong the them hoc vien. Khoa hoc da day!");
        }
    }

    timKiemHocVien(hoTen: string): HocVien | null {
        for (const hocVien of this.dsHocVien) {
            if (hocVien.getHoTen() === hoTen) {
                return hocVien;
            }
        }
        return null;
    }

    daKetThucKhoaHoc(): boolean {
        // Giả sử ngày hiện tại là "2024-01-23"
        const ngayHienTai = new Date("2024-01-23");
        const ngayKetThuc = new Date(this.ngayMoKhoaHoc);

        return ngayHienTai > ngayKetThuc;
    }

    chuaBatDauKhoaHoc(): boolean {
        // Giả sử ngày hiện tại là "2024-01-23"
        const ngayHienTai = new Date("2024-01-23");
        const ngayMo = new Date(this.ngayMoKhoaHoc);

        return ngayHienTai < ngayMo;
    }

    toString(): string {
        return `KhoaHoc: ${this.tenKhoaHoc}, NgayMo: ${this.ngayMoKhoaHoc}, ThoiGianHoc: ${this.thoiGianHoc}, SoHocVien: ${this.dsHocVien.length}`;
    }
}

class TrungTamDaoTao {
    private dsKhoaHoc: KhoaHoc[];

    constructor() {
        this.dsKhoaHoc = [];
    }

    themKhoaHoc(khoaHoc: KhoaHoc): void {
        this.dsKhoaHoc.push(khoaHoc);
    }

    timKhoaHoc(tenKhoaHoc: string): KhoaHoc | null {
        for (const khoaHoc of this.dsKhoaHoc) {
            if (khoaHoc.toString().includes(tenKhoaHoc)) {
                return khoaHoc;
            }
        }
        return null;
    }

    hocVienDaTungHoc(hoTen: string): KhoaHoc[] {
        const khoaHocHocVienDaTungHoc: KhoaHoc[] = [];

        for (const khoaHoc of this.dsKhoaHoc) {
            if (khoaHoc.timKiemHocVien(hoTen) !== null) {
                khoaHocHocVienDaTungHoc.push(khoaHoc);
            }
        }

        return khoaHocHocVienDaTungHoc;
    }

    khoaHocChuaKetThuc(): KhoaHoc[] {
        const khoaHocChuaKetThuc: KhoaHoc[] = [];

        for (const khoaHoc of this.dsKhoaHoc) {
            if (!khoaHoc.daKetThucKhoaHoc()) {
                khoaHocChuaKetThuc.push(khoaHoc);
            }
        }

        return khoaHocChuaKetThuc;
    }

    khoaHocChuaBatDau(): KhoaHoc[] {
        const khoaHocChuaBatDau: KhoaHoc[] = [];

        for (const khoaHoc of this.dsKhoaHoc) {
            if (khoaHoc.chuaBatDauKhoaHoc()) {
                khoaHocChuaBatDau.push(khoaHoc);
            }
        }

        return khoaHocChuaBatDau;
    }

    toString(): string {
        let result = "Danh sach Khoa Hoc:\n";
        for (const khoaHoc of this.dsKhoaHoc) {
            result += khoaHoc.toString() + "\n";
        }
        return result;
    }
}

// Example Usage
const hocVien1 = new HocVien("Nguyen Van A", "Ha Noi", "123456789");
const hocVien2 = new HocVien("Tran Thi B", "Ho Chi Minh", "987654321");
const hocVien3 = new HocVien("Le Van C", "Da Nang", "111222333");

const khoaHoc1 = new KhoaHoc("Khoa Hoc Java", "2024-01-20", "18:00 - 20:00");
const khoaHoc2 = new KhoaHoc("Khoa Hoc Python", "2024-02-05", "19:00 - 21:00");

khoaHoc1.themHocVien(hocVien1);
khoaHoc1.themHocVien(hocVien2);
khoaHoc2.themHocVien(hocVien3);

const trungTam = new TrungTamDaoTao();
trungTam.themKhoaHoc(khoaHoc1);
trungTam.themKhoaHoc(khoaHoc2);

console.log(trungTam.toString());

// Test other functionalities
console.log("Tim Khoa Hoc: " + trungTam.timKhoaHoc("Java"));
console.log("Hoc vien da tung hoc: " + trungTam.hocVienDaTungHoc("Nguyen Van A"));
console.log("Khoa hoc chua ket thuc: " + trungTam.khoaHocChuaKetThuc());
console.log("Khoa hoc chua bat dau: " + trungTam.khoaHocChuaBatDau());
