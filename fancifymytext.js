function bigger() {
    document.getElementById("textarea").style.fontSize = "24pt";
}

function fancy() {
    document.getElementById("textarea").style.fontWeight = "bold";
    document.getElementById("textarea").style.textDecoration = "underline";
    document.getElementById("textarea").style.color = "blue";
    document.getElementById("boring").checked = false;
}

function boring() {
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.textDecoration = "none";
    document.getElementById("textarea").style.color = "black";
    document.getElementById("fancy").checked = false;
}

function moo() {
    document.getElementById("textarea").style.textTransform = "uppercase";
    var str = document.getElementById("textarea").value;
    var parts = str.split(".");
    str = parts.join("-Moo");
    document.getElementById("textarea").value = str;
}