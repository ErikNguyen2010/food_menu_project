import { MonAn } from "../models/MonAn.js"
import { DANH_SACH_MON_AN } from "../util/settings.js";


let mangMonAn = [];
document.querySelector('#btnThemMon').onclick = () =>{
    let monAn = new MonAn();
    let arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');
    for (let index of arrInput){
        let {id, value} = index
        monAn[id] = value;
    }
    let html = '';
    for (let key in monAn){
        switch(key){
            case 'loaiMon':{
                html += `
                    <li id="${key}" class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">${key}</h6>
                        </div>
                        <span id="spMa" class="text-muted">${monAn[key] === 'loai1' ? 'Chay' : 'Mặn'}</span>
                    </li>
                `
            };break;
            case 'maTinhTrang':{
                html += `
                    <li id="${key}" class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">${key}</h6>
                        </div>
                        <span id="spMa" class="text-muted">${monAn[key] === '0' ? 'Hết' : 'Còn'}</span>
                    </li>
                `
            };break;
            case 'hinhAnh':{
                html += `
                    <li id="${key}" class="list-group-item d-flex justify-content-between lh-condensed">
                        <div class = "w-75">
                            <h6 class="my-0">${key}</h6>
                        </div>
                            <img src = "${monAn[key]}" alt = "..." width = "w-25" height = "50" >
                    </li>
                `
            };break;
            default: {
                html += `
                    <li id="${key}" class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">${key}</h6>
                        </div>
                        <span id="spMa" class="text-muted">${monAn[key]}</span>
                    </li>
                `
            }

        }
    }
    html += `
        <li id="giaKhuyenMai" class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 class="my-0">Giá khuyến mãi</h6>
            </div>
            <span id="spMa" class="text-muted">${monAn.tinhGiaKhuyenMai()}</span>
        </li>
    `
    document.querySelector("#thongTinMonAn").innerHTML = html;
    mangMonAn.push(monAn);
    luuLocalStorage();
}
function luuLocalStorage(){
    let sMonAn = JSON.stringify(mangMonAn);
    localStorage.setItem(DANH_SACH_MON_AN, sMonAn);
}

function layLocalStorage(){
    if(localStorage.getItem(DANH_SACH_MON_AN)){
        let sMonAn = localStorage.getItem(DANH_SACH_MON_AN);
        let mangMonAn = JSON.parse(sMonAn);
        console.log(mangMonAn);
    }
}
layLocalStorage()