var input = "w3resource";
var scrollInterval = 100;
var myVar = setInterval(advanceScroll, scrollInterval);

function advanceScroll() {
    var lastChr = input.toString().split('').pop();
    input = input.slice(0, -1);
    input = lastChr + input;
    document.getElementById("scroller").innerHTML = input;
}



