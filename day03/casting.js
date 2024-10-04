// 형변환 (Type Conversion)

let data1 = "10" - 20;
console.log(data1);

// 숫자가 될 수 있는 문자열에 +,-를 붙이면 숫자타입으로 강제 형변환 된다.
let data2 = +"20";
let data3 = Number("20")
console.log(typeof(data2));
console.log(data3);


// "안녕" >>> true로 바꾸고 싶음
let data4 = "안녕";
let data5 = Boolean(data4);
console.log(data5);
console.log(typeof(data5));

// !,!!를 붙이면 boolean 타입으로 강제 형변환 된다.
let data6 = "안녕";
let data7 = Boolean(data6);
console.log(!data7);
console.log(typeof(data7));

// 정수, 실수 >>> 문자열
let data8 = 10;
let data9 = 10;
let data10 = data8.toString() + data9.toString();

console.log(data10);