//두 수를 더해서 출력하기
// const add = (num1, num2, callback) => {
//   callback(num1 + num2);
// }
// const print = (value) => {
//   console.log(value);
// }
// add(20, 310, print);


// // 성과 이름을 받아서 연결하고 출력해주는 함수
// const getFullName = (lastName, firstName, callback) => {
//   callback(lastName + firstName);
// }
// const printFullname = (value) => {
//   console.log(value);
// }
// getFullName("김", "나라", printFullname);




// 두 점수의 덧셈결괄를 출력
// const add = (num1, num2, callback) => {
//   let sumNum =  num1 + num2;
//   callback(sumNum);
// }
// const print = (sum) => {
//   console.log(sum);
// }
// add(10, 201, print);



// 두 점수의 곱셈 결과를 출력
// const add = (num1, num2, callback) => {
//   let sumNum =  num1 * num2;
//   callback(sumNum);
// }
// const print = (sum) => {
//   console.log(sum);
// }
// add(10, 110, print);


//성과 이름을 전달 받아서 "000님 환영합니다" 출력
// const add = (name1, name2, callback) => {
//   let fullName =  name1 + name2;
//   callback(fullName);
// }
// const print = (value) => {
//   let value2 = `${value}님 환영합니다`
//   console.log(value2);
// }
// add("홍", "길동", print);















// 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력
// const addNum = (num1, num2, callback) => {
//   callback(num1 + num2);
// }

// const isEven = (num1, callback) => {
//   let result =  num1 % 2 == 0 ? "짝수" : "홀수";
//   callback(result);
// }

// const print = (result) => {
//   console.log(result);
// }

// addNum(10, 21, (result) => {
//   isEven(result, print)
// });



// 2번쨰 방법
// const addNum = (num1, num2, callback) => {
//   callback(num1 + num2);
// }

// const isEven = (num1) => {
//   let result =  num1 % 2 == 0 ? "짝수" : "홀수";
//   print(result);
// }

// const print = (result) => {
//   console.log(result);
// }

// addNum(11, 21, isEven);





// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
// const addNum = (num1, num2, callback) => {
//   callback(num1 * num2);
// }
// const isDiv = (num1, callback) => {
//   let result =  num1 * 2;
//   callback(result);
// }
// const print = (result) => {
//   console.log(result);
// }

// addNum(5, 5, (result) => {
//   isDiv(result, print)
// });



// 두 정수의 갑 중 작은 값을 반환하여 출력
// const addNum = (num1, num2, callback) => {
//   callback(num1 > num2 ? num2 : num1);
// }
// const isDiv = (result) => {
//   console.log(result);
// }
// addNum(45, 31, isDiv);





// 결제 상품 이름과, 결제 상태를 전달받아서
// 결제 상태가 true일 경우 결제완료 false 일 경우 결제 취소를 출력
const product = (prod, payment, callback) => {
  let okPay =  payment == 1 ? "결제완료" : "결제취소";
  callback(prod, okPay);
}
const print = (prod2, result) => {
  console.log(`상품명은 ${prod2}, 상태는 ${result}`);
}
product("핸드폰", 0, print);




// 4) 문자열을 받아서 순서를 반대로 바꾼 후 출력







// 5) 사용자가 입력한 값까지 누적합 후 5의 배수인지 확인 후 출력


 
// 6) 1~100까지 짝수만 더한 후 결과 값의 2를 곱한 후 출력
// 7) 2개의 정수 중 최소 값과 최대 값을 비교 후 큰 값에 2를 곱해서 출력