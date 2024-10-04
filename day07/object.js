// let user = {
//   name : "나나",
//   age : 20,
//   height : 200,
//   mbit : "enfj"
// };
// console.log(user.name);


// let name = "홍길동";
// name = "홍길동2";
// name = "홍길동3";
// console.log(name)


// user.money = 20000;
// user.name = "가가가";
// console.log(user.money);
// console.log(user.name);

// let uesr2 = new Object(); // {}  위에랑 같은거임

// console.log(user["mbit"]);



// const post = {
//   id : 1,
//   title : "오늘은 즐거운 금요일",
//   content : "자바스크립트 공부",
//   name : "홍길동"
// };

// post.title = "불금엔 치킨" // 속성값이 바뀔 수 있다.
// console.log(post.title);




// const products = {
//   product1 : "지우개",
//   product2 : "연필",
//   product3 : "마우스",
//   product4 : "모니터",
//   product5 : "노트",
//   product6 : "볼펜",
// }

// // 향상된 for, 빠른 for문, //  for in, for of
// for(let i in products){
//   console.log(products[i])  //  products[i] 객체의 속성값을 출력하는 공식
// }



// 빠른 for문을 이용하여 모든 유저의 point 를 누적한 결과를 출력하기
// const user = {
//   user1 : {
//     name : "홍길동",
//     age : 20,
//     point : 3000
//   },
//   user2 : {
//     name : "이순신",
//     age : 30,
//     point : 5000
//   },
//   user3 : {
//     name : "장보고",
//     age : 25,
//     point : 10000
//   },
// }

// let total = 0;
// for(let i in user){
//   total += user[i].point;
// }
// console.log(total)
// console.log(user.user2.point)



const user1 = {name : "홍홍"};
const user2 = {name : "박박"};
const user3 = {name : "김김"};
const user4 = {name : "나나"};
const user5 = {name : "무무"};
const user6 = {name : "다다"};

//프로토타입(prototype)
//객체 생성자 함수에 의해 생성되는 객체들이 공유하는 속성과 메소드를 저장하는 특수한 객체
function User(name){
  this.name = name;
}

const user7 = new User("동동");
const user8 = new User("유유");
console.log(user7)
console.log(user8)

User.prototype.hello = "안녕하세요";
console.log(user7.hello)
console.log(user8.hello)