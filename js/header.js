window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.height = "90px";
        document.getElementById("header").style.background = "#fff";

    } else {
        document.getElementById("header").style.height = "120px";
        document.getElementById("header").style.background = "none";
    }
}