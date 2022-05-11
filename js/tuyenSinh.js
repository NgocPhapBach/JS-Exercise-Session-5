/**
 * Khối 1: khuVuc, doiTuong, diemChuan, diemMon1, diemMon2, diemMon3
 * 
 * Khối 2: 
 * B1: tạo hàm kiemTra
 * B2: lấy giá trị từ form: diemChuan, diemMon1, diemMon2, diemMon3, selectKV, selectDT
 *      kiểm tra người dùng đang chọn option đối tượng nào, khu vực nào
 * B3: Tính điểm tổng và kết luận
 *      Nếu điểm tổng >= điểm chuẩn và cả 3 môn điểm khác không => trúng tuyển + điểm tổng
 *      Nếu 1 trong 3 môn có môn 0 điểm => không trúng tuyển vì có môn 0 điểm
 *      Nếu điểm tổng < điểm chuẩn => không trúng tuyển + điểm tổng
 * B4: hiển thị kết quả lên UI
 * 
 * Khối 3: tongDiem
 */

const KVA = 2;
const KVB = 1;
const KVC = 0.5;

const DT1 = 2.5;
const DT2 = 1.5;
const DT3 = 1;

function kiemTra() {
    var diemChuan = document.getElementById("inpDiemChuan").value;
    var diemMon1 = Number(document.getElementById("inpDiem1").value);
    var diemMon2 = Number(document.getElementById("inpDiem2").value);
    var diemMon3 = Number(document.getElementById("inpDiem3").value);

    var selectKV = document.getElementById("location").value;
    var selectDT = document.getElementById("person").value;

    var khuVuc = 0;
    khuVuc = kiemTraKV(selectKV);

    var doiTuong = 0;
    doiTuong = kiemTraDT(selectDT);

    var tongDiem = 0;
    tongDiem = kiemTraDiem(diemMon1, diemMon2, diemMon3, khuVuc, doiTuong);

    document.getElementById("ketQua").innerHTML = tongDiem;

    if (tongDiem >= diemChuan && diemMon1 != 0 && diemMon2 != 0 && diemMon3 != 0) {
        document.getElementById("ketQua").innerHTML = "Bạn đã trúng tuyển. Điểm của bạn: " + tongDiem;
    } else if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        document.getElementById("ketQua").innerHTML = "Bạn không trúng tuyển vì có môn điểm 0";      
    } else {
        document.getElementById("ketQua").innerHTML = "Bạn không trúng tuyển. Điểm của bạn: " + tongDiem;
    }
}
function kiemTraKV(selectKV) {
    switch (selectKV) {
        case "A":
            return 2;
            break;
        case "B":
            return 1;
            break;
        case "C":
            return 0.5;
            break;
        default:
            return 0;
            break;
    }
}

function kiemTraDT(selectDT) {
    switch (selectDT) {
        case "1":
            return 2.5;
            break;
        case "2":
            return 1.5;
            break;
        case "3":
            return 1;
            break;
        default:
            return 0;
            break;
    }
}

function kiemTraDiem(diemMon1, diemMon2, diemMon3, khuVuc, doiTuong) {
    return diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
}