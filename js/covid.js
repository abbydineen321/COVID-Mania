$(document).ready(function () {

    

    $.getJSON("data/player.json", function (data) {
        var name, score;

        // calling JSON object and finding the name of player and its score
        $(data.players).each(function (index, value) {
            name = value.name;
            score = value.score;
        });

        // prep the values
        info = "Name: " + name + "<br>Score: " + score;

        $(".score").append(info);
    });

    //index page name button
    $(".submit-btnIndex").click(function () {
        var input = tempName;

    });

    // Activity 1 button event
    $(".submit-btn1").click(function () {
        var input = $("#answer").val();
        var answers = validate(input, answer);
        var answerType;
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
    getName(userName);
    var message = document.getElementById("welcome");
    if (userName != null) {
        message.innerHTML = "Hello " + userName + "! Hope you are having a great day! Let's go onto the next activity!";
        document.getElementById("nxt-btn").className = "show";
        document.getElementById();
    }
    return userName;
}

function getName(userName) {
    
    return userName;
}

function displayName() {
    var name = getName(); 
    //score;

    // calling JSON object and finding the name of player and its score
    $(data.players).each(function (index, value) {
        name = value.name;
        score = value.score;
    });

    // prep the values
    info = "Name: " + name + "<br>Score: " + score;

    $(".score").append(info);
}