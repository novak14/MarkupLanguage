var menu = document.getElementById("menu");
var aSections = menu.getElementsByClassName("moveToSection");
for (var i = 0; i < aSections.length; i++) {
    aSections[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
