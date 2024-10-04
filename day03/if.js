// 성인인지 아닌지 검사

const age = 15;
const baseAge = 19;

// if(조건식){}

// if(age > baseAge){
//   console.log("성인입니다.")
// }else if(age == baseAge) {
//   console.log("내년에 만나자.")
// }else {
//   console.log("성인 아님.")
// }


// 이름 : 여러분들의 성함
// 국어 : 80점
// 수학 : 70점
// 영어 : 90점
// 과학 : 20점

// 평균, 학점, 구하기
// if문을 사용해서 평균이 60점이면 합격, 60점 이하는 불합격을 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.


let name = "박성훈";
let sub01 = 90;
let sub02 = 70;
let sub03 = 90;
let sub04 = 20;
let subResult = sub01 + sub02 + sub03 + sub04;
let subResult2 = subResult / 4;
let subResult3 = "";

if(subResult2 > 60){
  subResult3 = "합격";
}else {
  subResult3 = "불합격";
}

console.log(subResult)
console.log(subResult2)

console.log(`${name}님, [${subResult}],[${subResult2}],[${subResult3}]`)




