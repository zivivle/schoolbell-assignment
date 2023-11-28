// 정답 작성

// 1
document.querySelector("#target-1").classList.remove("border");

// 2
document.querySelector("#target-1").style.left = "250px";

//3
document.querySelector(".target-2").classList.replace("border", "blue");

//4
const target2 = document.querySelector(".target-2");

target2.style.left = "50px";
target2.style.marginTop = "-15px";

//5
const target3 = document.querySelector("#target-3");
const target4 = document.querySelector("#target-4");

target3.style.transition = "opacity 1s ease-out";
target3.style.opacity = "0";

target3.addEventListener("transitionend", () => {
  target4.classList.add("green");
});
