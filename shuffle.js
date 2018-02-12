var divs = document.getElementsByClassName("shufflable");

var index, randomIndex;
var temp;
for (index = divs.length - 1; index >= 0; index--) {
randomIndex = Math.floor(Math.random() * (index + 1));
temp = divs[index].innerHTML;
divs[index].innerHTML = divs[randomIndex].innerHTML;
divs[randomIndex].innerHTML = temp;
}
