// 반복문
// for문
// for(초기식; 조건식; 증감식){}

// for(let i=0; i < 10; i++) {
//   조건식이 참일 때 실행할 문장;
// }


//1부터 10까지 출력
for(let i = 0; i < 10; i++){
  // if(i==5) { break; }
  if(i==5) { continue; }
  console.log(i+1);
  
}