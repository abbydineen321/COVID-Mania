$(document).ready(function () {
    $.getJSON("data/player.json", function (data) {
        var name, score, info;

        // calling JSON object and finding the name of player and its score
        $(data.players).each(function (index, value) {
            if (value.name == "Joe") {
                name = value.name;
                score = value.score;
            }
        });

        // prep the values
        info = "Name: " + name + "<br>Score: " + score;

        $(".info").append(info);
    });

    // Activity 1 button event
    $(".submit-btn1").click(function () {
        var input = $("#answer").val();
        var answers = validate(input, answer);
        var answerType;
    });

    // Activity 2 button event
    $(".submit-btn2").click(function () {});

    // Activity 6 button event
    $(".submit-btn6").on("click", function () {
        var input = $("#answer").val();
        var checks = booleanText(input);
        if (checks == true) {
            console.log("true");
        } else if (checks == false) {
            console.log("false");
        } else {
            console.log("Nothing");
        }
    });

    $(".ping").click(function () {
        var ping = new Audio();
        ping.src = "audio/ping.mp3";
        ping.play();
    });

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
});
