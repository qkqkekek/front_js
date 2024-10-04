// 4. 데이터 타입 (typeof()) === 원시타입
// 숫자 타입(number) : 42, 3.14
// 논리 타입(bool) : true, false
// 뮨자열 타입(string) : "안녕", "하세요", "35", 'a', "a"
// 객체 레퍼런스 타입(object) :  object, array, Math, Date,
// undefined : 타입이 정해지지 않은 것을 의미
// null : 값이 정해지지 않는 것을 의미


// var data1 = 42;
// console.log(data1);
// console.log(typeof(data1));

// var data2 = true;
// console.log(data2);
// console.log(typeof(data2));

// var data3 = "안녕하세요";
// console.log(data3);
// console.log(typeof(data3));

// var data4;
// console.log(data4);
// console.log(typeof(data4));



// var 문제점
// 1. 같은 변수명을 사용해도 문제가 되지 않는다.

var data11 = 10;
console.log(data11);


let data22 = 20;
console.log(data22);


const data33 = 100;
console.log(data33);


// 삼항 연산자

10 == 11 ? "같습니다" : "아닙니다"
console.log(10 == 11 ? "같습니다" : "아닙니다");

let data188 = "";
let data288 = "20";

let data388 = data188 + data288 ? "정답" : "거짓"
console.log(data3);


// false가 아닌데 false로 취급되는 값
console.log(Boolean(100));  //treu, 값이란게 있으면 true
console.log(Boolean(" "));  //treu
console.log(Boolean("")); //false
console.log(Boolean(NaN));  //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined));  //false



















