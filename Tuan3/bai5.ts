class HocVien {
    private hoTen: string;
    private namSinh: number;
    private diemMonHoc: { [monHoc: string]: number };

    constructor(hoTen: string, namSinh: number, diemMonHoc: { [monHoc: string]: number }) {
        this.hoTen = hoTen;
        this.namSinh = namSinh;
        this.diemMonHoc = diemMonHoc;
    }

    kiemTraLuanVanTotNghiep(): boolean {
        const diemTrungBinh = this.tinhDiemTrungBinh();
        return diemTrungBinh > 7 && !this.coMonDuoi5Diem();
    }

    kiemTraThiTotNghiep(): boolean {
        const diemTrungBinh = this.tinhDiemTrungBinh();
        return diemTrungBinh <= 7 && !this.coMonDuoi5Diem();
    }

    kiemTraThiLai(): string[] {
        const monThiLai: string[] = [];
        for (const monHoc in this.diemMonHoc) {
            if (this.diemMonHoc[monHoc] < 5) {
                monThiLai.push(monHoc);
            }
        }
        return monThiLai;
    }

    private tinhDiemTrungBinh(): number {
        const soMon = Object.keys(this.diemMonHoc).length;
        let tongDiem = 0;

        for (const monHoc in this.diemMonHoc) {
            tongDiem += this.diemMonHoc[monHoc];
        }

        return soMon > 0 ? tongDiem / soMon : 0;
    }

    private coMonDuoi5Diem(): boolean {
        for (const monHoc in this.diemMonHoc) {
            if (this.diemMonHoc[monHoc] < 5) {
                return true;
            }
        }
        return false;
    }
}

// Example Usage
const hocVien1 = new HocVien("Nguyen Van A", 1998, { "Toan": 8, "Van": 7, "Anh": 6, "Ly": 9, "Hoa": 8 });
const hocVien2 = new HocVien("Tran Thi B", 1999, { "Toan": 5, "Van": 6, "Anh": 7, "Ly": 4, "Hoa": 6 });
const hocVien3 = new HocVien("Le Van C", 2000, { "Toan": 9, "Van": 8, "Anh": 7, "Ly": 8, "Hoa": 7 });

console.log("HocVien 1:");
console.log("Luan van tot nghiep: ", hocVien1.kiemTraLuanVanTotNghiep());
console.log("Thi tot nghiep: ", hocVien1.kiemTraThiTotNghiep());
console.log("Thi lai: ", hocVien1.kiemTraThiLai());

console.log("\nHocVien 2:");
console.log("Luan van tot nghiep: ", hocVien2.kiemTraLuanVanTotNghiep());
console.log("Thi tot nghiep: ", hocVien2.kiemTraThiTotNghiep());
console.log("Thi lai: ", hocVien2.kiemTraThiLai());

console.log("\nHocVien 3:");
console.log("Luan van tot nghiep: ", hocVien3.kiemTraLuanVanTotNghiep());
console.log("Thi tot nghiep: ", hocVien3.kiemTraThiTotNghiep());
console.log("Thi lai: ", hocVien3.kiemTraThiLai());
