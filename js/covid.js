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
        info = "Name: " + name + "\nScore: " + score;

        $(".info").append(info);
    });

    function correct() {
        number = document.getElementById("counter").value;
        score = parseInt(number);
        score = score + 1;
        document.getElementById("counter").value = score;
    }

    function wrong() {
        number = document.getElementById("counter").value;
        score = parseInt(number);
        score = score - 1;
        document.getElementById("counter").value = score;
    }

    function validate(text, answer) {}

    function spellcheck(txt, answer) {
        this.txt = txt;
        this.txt = {};
        txt.forEach(item => {
            !this.txt[item] && (this.txt[item] = 0);
            this.txt[item]++;
        });
    }

    $(function () {
        $("body").removeClass("fade-out");
    });
});
