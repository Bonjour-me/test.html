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

  function triviaTime() {
    var date = new Date();
    var time = date.getHours();
    var month = date.getMonth();
    var greetings = ["Good Morning, Good Afternoon, Good Evening"];
    {var name = prompt("what's your name?"); 
      var firstLetter = name.charAt(0);
      alert(name.ToUpperCase()); 
    }
}

function triviaName() {
    var name = name.toUpperCase();
    var firstLetter = name.charAt(0);
    return name;
}

function validEmail(email) {
    var yourEmail = prompt("Enter your email")
    var emailRegex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    var valid = email.match(emailRegex);
    if (valid = email.ToUpperCase()) {
      return email.ToUpperCase.split("@");
      } else {
        alert("Enter a valid email")
      }
    
}
function triviaQuotes() {
    var quotes = ["make today amazing", "think positive", "believe you can and you're halfway there", "your patience is your power", "mistakes are proof that you are trying" ];
    Math.floor(Math.random()*4)+1;
}
