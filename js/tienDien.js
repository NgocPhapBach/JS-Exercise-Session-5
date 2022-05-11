/**
 * Khối 1: name, soKW
 * 
 * Khối 2: 
 * B1: tạo hàm tinhTienDien
 * B2: lấy giá trị từ form: name, soKW
 * 
 * B3: Tính tiền điện
 *      Nếu 0 < soKW <= 50 -> tienDien = soKW * 500
 *      Nếu 50 < soKW <= 100 -> tienDien = 25000 + (soKW - 50) * 650;
 *      Nếu 100 < soKW <= 200 -> tienDien = 57500 + (soKW - 100) * 850;
 *      Nếu 200 < soKW <= 350 => tienDien = 142500 + (soKW - 200) * 1100;
 *      Nếu 350 < soKW -> tienDien = 307500 + (soKW - 350) * 1300;
 *      Ngược lại -> cho người dùng nhập lại soKW
 * B4: hiển thị kết quả lên UI
 * 
 * Khối 3: tienDien
 */
function tinhTienDien() {
    var name = document.getElementById("inpName").value;
    var soKW = document.getElementById("inpKW").value;

    var tienDien = 0;

    if(0 < soKW && soKW <= 50){
        tienDien = soKW * 500;
    } else if(50 < soKW && soKW <= 100){
        // 25000 = 50KW đầu * 500
        tienDien = 25000 + (soKW - 50) * 650;
    } else if(100 < soKW && soKW <= 200){
        // 57500 = 50KW đầu * 500 + 50KW kế tiếp * 650
        tienDien = 57500 + (soKW - 100) * 850;
    } else if(200 < soKW && soKW <= 350){
        // 142500 = 50KW đầu * 500 + 50KW kế * 650 + 100 kế * 850
        tienDien = 142500 + (soKW - 200) * 1100;
    } else if(350 < soKW){
        // 307500 = 50KW đầu * 500 + 50KW kế * 650 + 100KW kế * 850 + 150KW kế * 1100
        tienDien = 307500 + (soKW - 350) * 1300;
    } else{
        alert("Số KW không hợp lệ! Vui lòng nhập lại")
    }

    document.getElementById("ketQua2").innerHTML = "Khách hàng: " + name + "; Tiền điện : " + tienDien.toLocaleString() + " VNĐ";
}