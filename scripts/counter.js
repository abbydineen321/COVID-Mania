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
