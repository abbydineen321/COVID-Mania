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

    $(".submit-btn").click(function () {
        var input = $("#answer").val();
        var answers = validate(input, answer);
        var answerType;
        playPing();
    });

    $(".ping").click(function () {
        var ping = new Audio();
        ping.src = "audio/ping.mp3";
        ping.play();
    });

    function validate(text, answer) {}

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
