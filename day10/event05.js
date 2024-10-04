//input
//fontsize 25px
//border 스타일 변경, solid 2px green
//width 200px
//height 40px
//단, inputs[0] 방번호로 들고오지 않는다.
// inputs 반복문을 사용해서 변경하기

const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

console.log(inputs);

button.addEventListener("click", () => {
  inputs.forEach((inputs) => {
    inputs.style.fontSize = "30px";
    inputs.style.border   = " 2px solid green";
    inputs.style.width = "200px";
    inputs.style.height = "40px";
  })
});


