let randomNum = Math.floor(Math.random() * 20 + 1);
let score = 15;
const reset = document.querySelector(".top .again");
scoreNum = document.querySelector(".scorenum");
console.log(randomNum);
let qMark = document.querySelector(".qmark");

reset.addEventListener("click", () => {
  console.log("good");
  scoreNum.textContent = 15;
  document.querySelector(".number").value = 0;
  document.querySelector(".startguess").textContent = "Start guessing...";
});
document.querySelector(".check").addEventListener("click", function () {
  let inputNumber = Number(document.querySelector(".number").value);

  if (randomNum === inputNumber) {
    document.querySelector(".startguess").textContent = "Correct!";
    score++;
    qMark.textContent = "✓";
    scoreNum.textContent = score;
    document.querySelector("body").classList.add("#");
  } else if (randomNum < inputNumber) {
    if (score >= 1)
      document.querySelector(".startguess").textContent = "Too high";
    score--;
    scoreNum.textContent = score;

    if (score === 0) {
      document.querySelector(".startguess").textContent = "You lose! 😣";
    }
  } else {
    if (score >= 1)
      document.querySelector(".startguess").textContent = "Too low";
    score--;
    scoreNum.textContent = score;

    if (score === 0) {
      document.querySelector(".startguess").textContent = "You lose! 😣";
    }
  }
});
