import { DANH_SACH_MON_AN } from "../util/settings.js";
import { MonAn } from "./MonAn.js";
/*
    các class trong model sẽ ko chứa code DOM bất kỳ giao diện nào, nếu muốn thức hiện DOM trong model phải chuyển tất cả selector, id .... thành tham số


*/
export class Menu{
    danhSachMonAn = [];
    constructor(){

    }
    themMonAn = (monAn) =>{
        this.danhSachMonAn.push(monAn)
        return this.danhSachMonAn;
    }
    xoaMonAn = (maMon) => {
        this.danhSachMonAn = this.danhSachMonAn.filter(mon => mon.maMon !== maMon);
        return this.danhSachMonAn;
    }
    luuLocalStorage = () =>{
        let sMonAn = JSON.stringify(this.danhSachMonAn);
        localStorage.setItem(DANH_SACH_MON_AN, sMonAn);
    }
    layLocalStorage = () =>{
        if(localStorage.getItem(DANH_SACH_MON_AN)){
            let sMonAn = localStorage.getItem(DANH_SACH_MON_AN);
            this.danhSachMonAn = JSON.parse(sMonAn);
        }
    }
    renderMonAn(danhSachMonAn){
        let html = "";
        for(let index of this.danhSachMonAn){
            let monAn = new MonAn();
            monAn = {...monAn,...index}
            html += 
            `
                <tr>
                    <td>${monAn.maMon}</td>
                    <td>${monAn.tenMon}</td>
                    <td>${monAn.loaiMon}</td>
                    <td>${monAn.giaMon}</td>
                    <td>${monAn.khuyenMai}</td>
                    <td>${monAn.tinhGiaKhuyenMai()}</td>
                    <td>${monAn.maTinhTrang}</td>
                    <td>
                        <button class = "btn btn-danger" onclick ="xoaMonAn('${monAn.maMon}')"> Xóa </button>
                        <button class = "btn btn-primary ml-2" onclick = "suaMonAn('${monAn.maMon}')" data-toggle="modal" data-target="#exampleModal"> Sửa </button>
                    </td>
                </tr>
            `
        }
        document.querySelector('#tbodyFood').innerHTML = html;
    }
    
    layThongTinMonAn = (maMon) => {
        let monAn = this.danhSachMonAn.find(mon => mon.maMon == maMon);
        return monAn
    }
    capNhatMonAn = (monAnChinhSua) => {
        let monAnCapNhat = this.layThongTinMonAn(monAnChinhSua.maMon);
        for (let key in monAnChinhSua){
            monAnCapNhat[key] = monAnChinhSua[key]
        }
    }
    filterMonAn = (loaiMon, selector) => {
        let dsMonAn = [...this.danhSachMonAn]
        if(loaiMon !== "all"){
            this.danhSachMonAn = this.danhSachMonAn.filter(mon => mon.loaiMon == loaiMon);
        }
        this.renderMonAn(selector);
        this.danhSachMonAn = dsMonAn
    }
}