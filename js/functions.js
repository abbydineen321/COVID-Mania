function nameEntered() {
   var userName = document.getElementById("name").value;
   var message = document.getElementById("welcome");

   if (userName != "") {
      score = 0;
      localStorage.setItem("user", userName);
      localStorage.setItem("userScore", String(score));
      message.innerHTML = "Hello " + userName + "! Hope you are having a great day! Let's go onto the next activity!";
      document.getElementById("nxt-btn").className = "show";
   } else {
      alert("Enter your name");
   }
}

function displayName() {
   document.getElementById("name").innerHTML = localStorage.getItem("user");
   name.innerHTML = "" + user;
}

function displayScore() {
   document.getElementById("score").innerHTML = localStorage.getItem("userScore");
   score.innerHTML = "" + userScore;
}
