$(document).ready(function () {



    // Activity 1 button event
    addScore = 10
    $(".submit-btn1").click(function () {
        document.getElementById("answer").innerHTML = answer;
        if (answer != null && (answer == 'groceries' || answer == 'walk' || answer == 'work' || answer == 'doctors')) {
            localStorage.getItem("userScore") += addScore;
            ping();
            displayScore();
        } else {
            if (answer != null) {
                addScore = addScore - 1;
            }
        }
    });

    // Activity 2 button event
    $(".submit-btn2").click(function () { });

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

    $(".ping").click(function () {
        ping();
    });

    // funcitons based on javascript
    function ping() {
        var ping = new Audio();
        ping.src = "audio/ping.mp3";
        ping.play();
    }

    function validate(text, answer) { }

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
});

function nameEntered() {
    var userName = document.getElementById("name").value;
    var message = document.getElementById("welcome");

    if (userName != null) {
        score = 0;
        localStorage.setItem("user", userName);
        localStorage.setItem("userScore", String(score));
        message.innerHTML = "Hello " + userName + "! Hope you are having a great day! Let's go onto the next activity!";
        document.getElementById("nxt-btn").className = "show";
        document.getElementById();
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


