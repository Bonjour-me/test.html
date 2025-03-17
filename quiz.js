var triviaQuestions = ["Jupiter? A. planet, B. star, C. moon", "water? A. gas, B. solid, C. liquid", "the U.S.? A. country, B. state, C. continent"];
var triviaAns= ["A", "C", "A"];

function triviaQuiz() {
    var points = 0;
    for (i = 0; i <= 3; i++) {
      var attempts = 3;
      while (attempts > 0) {
        ans = prompt("What is " + triviaQuestions[i]);
        if (ans == triviaAns[i]) {
          points = points + attempts;
          alert("Correct!");
          attempts = 0;
        } else {
          alert("Incorrect");
          attempts = attempts - 1;
        }
      }
    }
    return points;
  }