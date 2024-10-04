
// 배열을 생성하는 방법
// const array0 = [10, 20, 30, 40, 50, 60];
// console.log(array0[4]);  // 4번째 있는 값 , 0부터 시작임

// const array2 = new Array();
// const array3 = new Array(10);  // 길이를 알고 있을 떄
// const array33 = new Array(10).fill(false);  // 길이를 알고 있을 떄

// const array4 = Array.of("1", "2", "3");
// console.log(array2);
// console.log(array3);
// console.log(array33);
// console.log(array4);


// // 길이를 확인
// console.log(array3.length);


// // .split(), string 에서만 사용가능
// // 전달된 매개변수를 기준으로 잘라서 배열로 리턴한다.
// // 아무것도 전달하지 않으면 모두 자른다.
// const phone = "010-9999-4444";
// let arry5 = phone.split("-");
// console.log(arry5);
// // 출력값 [ '010', '9999', '4444' ] 


// // .join(), array 메서드
// // 배열을 붙여준다
// let phoneNumber = arry5.join("");
// console.log(phoneNumber);
// // 출력 01099999999


// // .replace("바꾸고 싶은 값", "바뀌는 값"), string에 포함된 메소드
// // .replaceAll("바꾸고 싶은 값", "바뀌는 값"), string에 포함된 메소드
// // 제일 먼저 만나는 값을 변경한다
// const phoneText = "010-9999-4444";
// const result = phoneText.replace("9","*")
// const result2 = phoneText.replaceAll("9","*")
// console.log(result);
// console.log(result2);


// .push(), array 메서드
// 기존에 배열에 값을 마지막에 추가한다.
// const arr1 = ["김세환", "홍길동","장보고"];
// arr1.push("김철수");
// arr1.push("흰둥이", "짱구");
// console.log(arr1);


// .concat(), array 메서드
// 2개의 배열을 합쳐서 *새로운 배열*로 리턴한다.
// const arr2 = ["건담","자쿠"];
// const arr3 = arr1.concat(arr2)
// console.log(arr3);


//.unshift(), array
// 맨 앞에 값을 추가하는 메서드
// arr3.unshift("김영희22");
// console.log(arr3);


// 제거
// .pop
// 맨 마지막의 요소를 추출, 마지막 값을 리턴
// console.log(arr3)
// console.log(arr3.pop())


// // .shift(), array
// 맨 앞의 요소를 추출, 맨 앞의 값을 리턴
// console.log(arr3.shift());
// console.log(arr3);


// .slice(startIndex, endIndex) ,endIndex 전까지 가져온다  array, 
// 얕은 복사, 새로운 배열로 리턴한다.
// 단 매개변수를 1개 전달하면 startIndex부터 끝까지 가져온다.
// console.log(arr3.slice(2,5));
// console.log(arr3.slice(4));
// console.log(arr3.slice(-4));
// console.log(arr3);



// .splice(startIndex, deleteCount, addItems), array
// const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(arr4.splice(2, 3));
// // console.log(arr4.splice(3, 1, 15));
// console.log(arr4.splice(4, 1, 50));  // 5값을 50으로 변경하기
// console.log(arr4);



//정렬
// .sort()   array
// 무작위로 들어간 데이터 값을 정렬하는 함수
// 오름차순
// const arr5 = [150, 100, 20, 30, 500, 10, 200, 30, 70, 80];
// console.log(arr5.sort((a, b) => a - b) );

// // .reverse()
// // 내림차순
// console.log(arr5.sort((a, b) => a - b).reverse());






// ////////////////////////////////////////////////./



// 배열의 고차함수
// .forEach( (data, i, array) => {} )
// const arr6 = [10, 20, 30, 40, 50, 60, 70];
// arr6.forEach( (data, i, array) => {
//   console.log(array);
// } )


// forEach를 사용하여 기존 값을 제곱으로 변경하기
// const arr66 = [10, 20, 30, 40, 50, 60, 70];
// arr66.forEach( (data) => {
//   let square = data * data;
//   console.log(square);
// } )




// map( () => {} )
// 반복을 통해 값에 접근하고, 새로운 배열로 return 한다.
// 반드시 return 값이 있어야 한다.
// const arr6 = [10, 20, 30, 40, 50, 60, 70];
// let result = arr6.map( (data, i, datas) => {
//   return data + 10
// })
// console.log(result);


// .filter()
// 조건이 true인 값만 모아서 새로운 배열로 리턴한다.
// 반드시 리턴 값이 필요하다.
// const arr666 = [10, 20, 30, 40, 50, 60, 70];
// let result2 = arr666.filter((data,i,datas) => data % 4 == 0);
// console.log(result2);