//BT1: Tìm số nguyên dương nhỏ nhất
let i = 1;
let result = 0;
while (true) {
    result += i;
    if (result > 10_000) {
        document.getElementById('Z').innerHTML = "Số nguyên dương nhỏ nhất là: " + i;
        break;
    }
    i++;
}

//BT2: Tính tổng x và n:
document.getElementById('sum').onclick = function () {
    let xNumber = +document.getElementById('xNumber').value;
    let nNumber = +document.getElementById('nNumber').value;
    let sum = 0;
    let i = 1;

    while (i <= nNumber) {
        sum += Math.pow(xNumber, i);
        i++;
    }
    document.getElementById('showSum').innerHTML = sum;
}

//BT3: Tính giai thừa:
document.getElementById('factorial').onclick = function () {
    let number = +document.getElementById('number').value;
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum *= i;
    }
    document.getElementById('showFactorial').innerHTML = sum;

}

//BT4: Show 10 thẻ div, div chẳn màu đỏ - div lẻ màu xanh
document.getElementById('showDiv').onclick = function () {
    let div = document.getElementById('div');
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            div.innerHTML += "<div style='background-color:red; width:25%'>Chẳn</div>"
        } else {
            div.innerHTML += "<div style='background-color:blue; width:25%'>Lẻ</div>"
        }
    }
    document.getElementById('showDiv').style.display = "none";
}