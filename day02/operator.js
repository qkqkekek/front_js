// 연산자
// ++, --

let data1 = 100;
data1++;
console.log(data1);

let data2 = 100;
++data2;
console.log(data2);

let data3 = true;
console.log(!data3);


// 이항 연산자
// +
let str1 = "오늘은 JS 2일차";
let str2 = "너무 재밌따";
let num1 = 8.16;
let num2 = 2024;

console.log(str1 + num1);
console.log(typeof(str1 + num1));

// 좌결합성에 의해 연산 후 연결된다.
console.log(num1 + num2 + str2);


// '/' 나누기 연산자
let num3 = 30;
let num4 = 4;
console.log(num3 / num4);

// '%' 나머지 값 연산자
console.log(num3 % num4);


// 누적복합 연산자
// +=, -=
let data5 = 100;
data5 += 200; // data5 = data5 + 200;
console.log(data5);


let data6 = 300;
data6 -= 80; // data6 = data6 - 80;
console.log(data6);


let data7 = "아녕";
let data8 = "ㅎ세요";
data7 += data8; // data7 = data7 + data8
console.log(data7);


// 관계 연산자
// ==, ===
//

let data9 = 100;
let data10 = "100";
let data11 = 101;

console.log(data9 != data10);
console.log(data9 == data11);


// 논리 연산자

// true || true // true
// true || false // true
// false || true // true
// false || false // false

// let isTrue = 10 != 11;
// isTrue && 10 == 10; // true
// isTrue && 10 != 10; // false
// isTrue && !isTrue; // false
// !isTrue || 10 != 10; // false
// let result = isTrue || 10 == "10" && 10 != 11;
// console.log(result)

// || : 앞에 값이 false면 뒤에 값을 초기값으로 넣는다.
let test = "";
console.log(test || 20);

// && : 앞에 값이 false면 뒤로 문장을 실행하지 않는다.(성능 향상을 위해서)
let data100 = 0;
10 === "11" && ++data100;
console.log(data100);