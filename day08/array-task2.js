//array에 담아서 사용

// 1) 1~10까지 누적합 구하기
// const arr1 = new Array(10).fill(0);
// let result = 0;
// arr1.map((data, i) => i + 1).forEach((dataSum) => result += dataSum);
// console.log(result);


// 선생님 풀이
// const arr1 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// let result1 = 0;
// arr1.forEach((num) => { result1 += num });
// console.log(result1)





// 2) 1~50까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경 후 출력하기
// const arr2 = new Array(50).fill(0);
// let isEven =  arr2.map((data, i) => i + 1).filter((data) => data % 2 == 0);
// let multiply = isEven.map((data, i) => data * 3).join();
// console.log(multiply);


// 선생님 풀이
// new Array(50).fill(0).map((data, i) => i + 1).filter((data) => data % 2 == 0).map((data) => data * 3).forEach((data) => {console.log(data)})




// 3) 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기
// const arr3 = [10, 20, 30, 40, 50];
// let rank = arr3.sort((a, b) => a - b).reverse().join();
// console.log(rank);









// 4) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기
// const arr4 = new Array(10).fill(0);
// let maxNum =  arr4.map((data, i) => i + 1).filter((data) => data > 5);
// let fiveNum = maxNum.map((data, i) => data * 2);
// console.log(fiveNum);




// 5) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
// ex) let arrTask1 = 1*3*5*7*9...

// const arr5 = new Array(30).fill(0);
// let isOdd =  arr5.map((data, i) => i + 1).filter((data) => data % 2 == 1);
// let star = isOdd.map((data, i) => data + "*").join();
// console.log(star);






// 6) arrTask1에(5번 문제 결과 값) 들어간 값에 "*"을 제거한 후 배열에 담아 
//    arrTask1의 기존의 값을 2배로 변경 후 모든 값을 출력하기
// ex) let arrTask1 = 1*3*5*7*9...
// const arr5 = new Array(30).fill(0);
// let isOdd =  arr5.map((data, i) => i + 1).filter((data) => data % 2 == 1);
// let star = isOdd.map((data, i) => data + "*").join("");
// 여기서부터 6번문제 시작
// let starArr = star.split("*");
// let result = starArr.map((data) => Number(data)).map((data) => data * 2);
// console.log(result);







// 7) 1~20까지 배열에 담고 배열의 들어간 값 중 뒤에서 5개 값을 더한 후 출력

