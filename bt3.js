let a=prompt("Số tiền vay (triệu đồng) ");
let b=prompt("Lãi suất tính theo năm");
let c=prompt("Số năm hạn mức");

let soTienLai= Number(a)*(Number(b)/100);
let tongSoTien = Number(a) + (Number(c)*soTienLai);
console.log(soTienLai);
console.log(typeof(soTienLai));

document.write(`Sau ${c} năm, số tiền cả gốc lẫn lãi là: ${tongSoTien} triệu`);