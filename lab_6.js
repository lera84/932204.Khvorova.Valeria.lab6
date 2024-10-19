
const openleft = document.getElementById("openleft");
const leftpic = document.getElementById("leftpic");

const openboth = document.getElementById("openboth");
const bothpics = document.getElementById("bothpics");

const openright = document.getElementById("openright");
const rightpic = document.getElementById("rightpic");

openleft.onclick = function(){
    leftpic.style.display = "flex";
    bothpics.style.display = "none";
    rightpic.style.display = "none";
}

openboth.onclick = function(){
    leftpic.style.display = "none";
    bothpics.style.display = "flex";
    rightpic.style.display = "none";
}

openright.onclick = function(){
    leftpic.style.display = "none";
    bothpics.style.display = "none";
    rightpic.style.display = "flex";
}