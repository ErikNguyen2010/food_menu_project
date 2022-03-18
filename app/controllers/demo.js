/*    
    Lập trình hướng đổi tượng OOP (object oriented programing)
    Hướng đối tượng có mấy tính chất:

    1. Tính trừu tượng (Abstraction): loại bỏ những thứ phức tạp cần thiết của đối tượng , chỉ tập trung vào những gì cốt lõi và quan trọng, tổ chức thành các thuộc tính và phương thức xử lý trong lập trình.

    2.Tính đóng gói (encapsulation): Tính chất che giấu thông tin và những xử lý bên trong của đối tượng. các đối tượng khác ko thể truy xuất duoc. ví dụ : thuốc tính của object nào thì object đó mới có thể truy xuất thay đổi, phương thức của object nào thì phải thông qua object đó mới có thể gọi được

    3. Tính kế thừa (inheritance) :  các class con có thể kế thừa các thuộc tính và phương thức từ class cha. có thể định nghĩa lại các phương thức đó (override - ghi đè phương thức)


    4. TÍnh đa hình (polymorphism): javascript ko hỗ trợ tính đa hình của hướng đối tượng
*/


//ES5
function SinhVienES5 (maSV, tenSV){
    this.maSinhVien = maSV;
    this.tenSinhVien = tenSV;
    this.hienThiThongTin = function (){
        console.log("mã sinh viên", this.maSinhVien);
        console.log("tên sinh viên", this.tenSinhVien);
    }
}

let sv = new SinhVienES5(1, "nguyen van a")
console.log(sv);


//ES6
class SinhVienES6{
    maSinhVien = "";
    tenSinhVien = "";

    constructor(maSV, tenSV){
        this.maSinhVien = maSV;
        this.tenSinhVien = tenSV
    }
    //Thuộc tính là function
    // hienThiTT = function(){
    //     console.log("mã sinh viên", this.maSinhVien);
    //     console.log("tên sinh viên", this.tenSinhVien);
    // }
    // hienThiTTSV = () =>{
    //     console.log("mã sinh viên", this.maSinhVien);
    //     console.log("tên sinh viên", this.tenSinhVien);
    // }


    //Phương thức (method)
    hienThiThongTin(){
        console.log("mã sinh viên", this.maSinhVien);
        console.log("tên sinh viên", this.tenSinhVien);
    }
}


let sv2 = new SinhVienES6(1, "tèo em")

console.log(sv2);

/*
    Kỹ thuật kế thừa trong hướng đối tượng
*/


class NguoiDung {
    taiKhoan = "";
    matKhau = "";
    email = "";
    soDienThoai = "";
    constructor(taikhoan, email){
        this.taiKhoan = taikhoan;
        this.email = email;

    }
    dangNhap(){
        console.log("dang nhập");
    }
    dangXuat(){
        console.log("dang xuất");
    }
    hienThiThongTin(){
        console.log('tài khoản', this.taiKhoan);
        console.log('email', this.email);
    }
}


class HocVien extends NguoiDung{
    danhSachLopHoc = ['fe', 'be'];
    constructor(taiKhoan,email){
        super(taiKhoan,email);
    
    }  
    hienThiThongTin(){
        super.hienThiThongTin();
        console.log("danh sách lớp học", this.danhSachLopHoc);
    }
}

let hocVien = new HocVien('admin', "admin@gmail.com");
hocVien.hienThiThongTin();
console.log(hocVien);