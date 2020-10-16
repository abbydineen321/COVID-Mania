$(document).ready(function () {
   var addScore = 10;

   // Activity 1 button event
   $(".submit-btn1").click(function () {
      ans = document.getElementById("answer").value;
      console.log(ans + addScore);
      answer = String(ans).toLowerCase();
      if (answer != null && (answer == "groceries" || answer == "walk" || answer == "work" || answer == "doctor")) {
         addToScore(addScore);
         addScore = 10;
         ping();
         setTimeout(function () {
            location.replace("./Activity2.html");
         }, 1500);
      } else {
         if (answer != null && addScore > 6) {
            addScore--;
         }
      }
   });

   // Activity 2 button event
   $(".submit-btn2").click(function () {
      input = document.getElementById("answer");
      answer = Number(input.value);
      if (answer != null && answer == 7) {
         addToScore(addScore);
         addScore = 10;
         ping();
         setTimeout(function () {
            location.replace("./Activity3.html");
         }, 1500);
      } else {
         if (answer != null && addScore > 6) {
            addScore--;
            input.value = "";
            input.placeholder = "You got it wrong try again!";
         } else {
            input.value = "";
            input.placeholder = "You got it wrong try again!";
         }
      }
   });

   // Activity 3 button event
   $(".submit-btn3").click(function () {
      input = document.getElementById("answer");
      answer = Number(input.value);
      if (answer != null && answer == 20) {
         addToScore(addScore);
         userScore = 10;
         ping();
         setTimeout(function () {
            location.replace("./Activity4.html");
         }, 1500);
      } else {
         if (answer != null && addScore > 6) {
            addScore--;
            input.value = "";
            input.placeholder = "You got it wrong try again!";
         } else {
            input.value = "";
            input.placeholder = "You got it wrong try again!";
         }
      }
   });

   // Activity 4 choices
   $(".a4-option1").click(function () {
      if (addScore > 6) {
         addScore--;
      }
      $(".response").html("Hey! We need to keep distance with our friends because of the bad virus out there");
   });
   $(".a4-option2").click(function () {
      ping();
      addToScore(addScore);
      addScore = 10;
      $(".response").html("That's right we waving is the best way to say hi in this situation");
      setTimeout(() => {
         location.replace("./Activity5.html");
      }, 3000);
   });
   $(".a4-option3").click(function () {
      if (addScore > 6) {
         addScore--;
      }
      $(".response").html("Don't ignore you friend at least say high but not high five!");
   });

   // Activity 5 button event
   $(".submit-btn5").on("click", function () {
      var input = $("#answer").val();
      var checks = booleanText(input);
      if (checks == false) {
         $(".feedback").html("You are wrong!!");
         if (addScore > 6) {
            addScore -= 2;
         }
      } else if (checks == true) {
         $(".feedback").html("You are correct!!");
         addToScore(addScore);
         ping();
         setTimeout(() => {
            location.replace("./Activity6.html");
         }, 2000);
      } else {
         $(".feedback").html("Tell me yes or no only!");
      }
   });
   $(".subtract").click(function () {
      value = $(".answer").val();
      if (value > 0) value--;
      $(".answer").val(value);
   });
   $(".add").click(function () {
      value = $(".answer").val();
      if (value < 20) value++;
      $(".answer").val(value);
   });

   // Activity 6 button event
   $(".submit-btn6").on("click", function () {
      var input = $("#answer").val();
      var checks = booleanText(input);
      if (checks == true) {
         $(".feedback").html("You are wrong!!");
         if (addScore > 6) {
            addScore -= 2;
         }
      } else if (checks == false) {
         $(".feedback").html("You are correct!!");
         addToScore(addScore);
         ping();
         setTimeout(() => {
            location.replace("./Activity7.html");
         }, 2000);
      } else {
         $(".feedback").html("Tell me yes or no only!");
      }
   });

   // Activity 7 button event
   $(".submit-btn7").click(function () {
      ans = document.getElementById("answer").value;
      console.log(ans + addScore);
      answer = String(ans).toLowerCase();
      if (answer != null && answer == "curfew") {
         addToScore(addScore);
         addScore = 10;
         ping();
         setTimeout(function () {
            location.replace("./Activity2.html");
         }, 1500);
      } else {
         if (answer != null && addScore > 6) {
            addScore--;
         }
      }
   });

   // functions based on javascript
   function ping() {
      var ping = new Audio();
      ping.src = "audio/ping.mp3";
      ping.play();
   }

   function booleanText(text) {
      if (text == "yes") {
         return true;
      } else if (text == "no") {
         return false;
      } else {
         return -1;
      }
   }

   function addToScore(score) {
      var userScore = sessionStorage.getItem("userScore");
      userScore = Number(userScore) + score;
      sessionStorage.setItem("userScore", userScore);
   }

   $(function () {
      $("body").removeClass("fade-out");
   });

   // do not write any fuction below this point
});
