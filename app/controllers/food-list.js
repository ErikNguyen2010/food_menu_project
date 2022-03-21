import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";
import { DANH_SACH_MON_AN } from "../util/settings.js";

let menu  = new Menu();
menu.layLocalStorage()

menu.renderMonAn("#tbodyFood")


window.xoaMonAn = (maMonClick) =>{
    alert(maMonClick)
    menu.xoaMonAn(maMonClick);
    menu.renderMonAn('#tbodyFood');
    menu.luuLocalStorage()
}
window.suaMonAn = (maMon) =>{
    document.querySelector('#exampleModalLabel').innerHTML = "cập nhật món ăn"
    let monAnChinhSua = menu.layThongTinMonAn(maMon)
    let arrInput = document.querySelectorAll("#foodForm input, #foodForm select, #foodForm textarea");
    for (let input of arrInput){
        let {id} = input;
        input.value = monAnChinhSua[id];
    }
}
document.querySelector("#btnCapNhat").onclick = function (){
    let monAnChinhSua = new MonAn();
    let arrInput = document.querySelectorAll("#foodForm input, #foodForm select, #foodForm textarea");
    for(let input of arrInput){
        let {id, value} = input;
        monAnChinhSua[id] = value;
    };
    menu.capNhatMonAn(monAnChinhSua);
    menu.renderMonAn('#tbodyFood');
}

document.querySelector("#selLoai").onchange = () => {
    let value = document.querySelector("#selLoai").value;
    menu.filterMonAn(value, "#tbodyFood");
}