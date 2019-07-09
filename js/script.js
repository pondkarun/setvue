function myDropFunc() {
    var x = document.getElementById("demoDrop");
    var y = document.getElementById("cli");

    if (x.className.indexOf("nav-side-show") == -1) {
        x.className += " nav-side-show";
        x.previousElementSibling.className += " btn-info btn-info-side";
        y.className += "fas fa-angle-down";


    } else {
        x.className = x.className.replace(" nav-side-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" btn-info btn-info-side", "");
        y.className += "fas fa-angle-right";
    }
}