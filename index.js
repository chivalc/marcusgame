let randomNum = Math.floor(Math.random() * 20 + 1);
console.log(randomNum);
let score = 15;
scoreNum = document.querySelector(".scorenum");

document.querySelector(".check").addEventListener("click", function () {
  let inputNumber = Number(document.querySelector(".number").value);

  if (randomNum === inputNumber) {
    document.querySelector(".startguess").textContent = "Correct!";
    score++;
    scoreNum.textContent = score;
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
