
// For dynamic change of PIP position
const cssStyle = document.createElement("style");
const mobileMenu = document.querySelector("#myTopnav");
document.body.appendChild(cssStyle);

function menuHeightChange(){
    cssStyle.innerHTML = "#dailymotion-pip-small-viewport{top:"+(
        mobileMenu.offsetHeight
    )+"px !important}";
}

















// Navbar function
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
        menuHeightChange();
    }

// sub menu Function
function dropbtnClicK() {
    var y = document.querySelector(".dropbtn");
    var sub = document.querySelector(".dropdown-content");
    if (sub.style.display === "block") {
        sub.style.display = "none";
    } else {
        sub.style.display = "block";
    }
    menuHeightChange();
}