// [숙제11] 동적 웹 페이지 구현
// 2025-11959 이은우

// Q1
const box = document.querySelector("#q1-box");
const themeBtn = document.querySelector("#theme-btn");
themeBtn.addEventListener("click", () => {
    box.classList.toggle("dark"); 
    if (box.classList.contains("dark")) {
        themeBtn.textContent="라이트 모드";
    }
    else {themeBtn.textContent="다크 모드";}
 });

 // Q2
const input = document.querySelector("#q2-input");
const count = document.querySelector("#q2-count");
const warn = document.querySelector("#q2-warn");

input.addEventListener("input", (e) => {
    count.textContent = e.target.value.length;
    if (e.target.value.length >= 100) {
        warn.textContent = "100자를 넘었습니다.";
        warn.style.color = "crimson";
    }
    else {warn.textContent = ""}
});