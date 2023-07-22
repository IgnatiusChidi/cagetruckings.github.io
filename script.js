var menu = document.getElementById("hbMenuButton");
var navTextUl = document.getElementById("navUl");
var closeButton = document.getElementById("closeMenu")

function buttonClick(){
    navTextUl.style.display = "block";
    closeButton.style.display = "block"
}

function MenuClose(){
    navTextUl.style.display = "none";
}

menu.addEventListener('click', buttonClick);
closeButton.addEventListener('click', MenuClose);
