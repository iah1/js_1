
function getValue() {
    var c = document.getElementById("three");
    var a = document.getElementById("one").value;
    var b = document.getElementById("two").value;
    var sum = +a + +b;
    c.innerHTML = sum;
}

function subValue() {
    var c = document.getElementById("sthree");
    var a = document.getElementById("sone").value;
    var b = document.getElementById("stwo").value;
    var sum = +a - +b;
    c.innerHTML = sum;
}


function mulValue() {
    var c = document.getElementById("mthree");
    var a = document.getElementById("mone").value;
    var b = document.getElementById("mtwo").value;
    var sum = +a * +b;
    c.innerHTML = sum;
}

function divValue() {
    var c = document.getElementById("dthree");
    var a = document.getElementById("done").value;
    var b = document.getElementById("dtwo").value;
    var sum = +a / +b;
    c.innerHTML = sum;
}


function showTime() {
    document.getElementById('tm').innerHTML = Date();
}


var ab = document.getElementById('bc');
function clickMe() {
    document.getElementById('cc').innerHTML = "Motherland";
    cc.style.color = "green";
}



let text = "    Hello World!    ";
document.getElementById("demo1").innerHTML = text;
function removeSpace() {
    let result = text.trim();
    document.getElementById("demo1").innerHTML = result;
}

//  or

var sp = document.getElementById("dem").innerHTML;
function remove_Spaces() {
    var results = sp.trim();
    document.getElementById("dem").innerHTML = results;
}


// or

function trimSpaces() {
    s = document.getElementById("textString").value;
    s = s.replace(/(^\s*)|(\s*$)/gi, "");
    s = s.replace(/[ ]{2,}/gi, " ");
    s = s.replace(/\n /, "\n");
    document.getElementById("textString").value = s;
}