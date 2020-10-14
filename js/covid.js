$(document).ready(function () {
   var addScore = 10;

   // Activity 1 button event

   $(".submit-btn1").click(function () {
      var userScore = localStorage.getItem("userScore");
      ans = document.getElementById("answer").value;
      anser = asn.toLowerCase();
      if (answer != null && (answer == "groceries" || answer == "walk" || answer == "work" || answer == "doctors")) {
         userScore += addScore;
         ping();
         displayScore();
      } else {
         if (answer != null) {
            addScore--;
         }
      }
   });

   // Activity 2 button event
   $(".submit-btn2").click(function () {});

   // Activity 6 button event
   $(".submit-btn6").on("click", function () {
      var input = $("#answer").val();
      var checks = booleanText(input);
      if (checks == true) {
         $(".feedback").html("You are wrong!!");
      } else if (checks == false) {
         $(".feedback").html("You are correct!!");
         ping();
      } else {
         $(".feedback").html("Tell me yes or no only!");
      }
   });

   // I think we can just remove this function because we can just call ping();
   //for each correct answers rather than assigning it to all buttons class
   // $(".ping").click(function () {
   //     ping();
   // });

   // functions based on javascript
   function ping() {
      var ping = new Audio();
      ping.src = "audio/ping.mp3";
      ping.play();
   }

   function validate(text, answer) {}

   function booleanText(text) {
      if (text == "yes") {
         return true;
      } else if (text == "no") {
         return false;
      } else {
         return -1;
      }
   }

   function spellcheck(txt, answer) {
      textArray = txt.split("");
      answerArray = answer.split("");
      textArray.forEach(i => {
         if (textArray[i] != answerArray[i]) {
            return false;
         }
      });
      return true;
   }

   $(function () {
      $("body").removeClass("fade-out");
   });

   // do not write any fuction below this point
});
