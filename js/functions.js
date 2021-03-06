function nameEntered() {
   var userName = document.getElementById("name").value;
   var message = document.getElementById("welcome");

   if (userName != "") {
      score = 0;
      sessionStorage.setItem("user", userName);
      sessionStorage.setItem("userScore", String(score));
      message.innerHTML = "Hello " + userName + "! Hope you are having a great day! Let's go onto the next activity!";
      document.getElementById("nxt-btn").className = "show";
   } else {
      alert("Enter your name");
   }
}

function displayName() {
   document.getElementById("name").innerHTML = sessionStorage.getItem("user");
}

function displayScore() {
   document.getElementById("score").innerHTML = sessionStorage.getItem("userScore");
}
