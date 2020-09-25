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
