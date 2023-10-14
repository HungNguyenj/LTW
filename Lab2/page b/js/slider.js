var sliderIndex =1;
showDivs(sliderIndex);

function  plusDivs(n) {
    showDivs(sliderIndex +=n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("item");
    var badge = document.getElementsByClassName("badge")
    if (n > x.length) {
        sliderIndex = 1;
    }
    if (n < 1) {
        sliderIndex = x.length;
    }
    for (i = 0; i < x.length;i++) {
        x[i].style.display = "none";
        badge[i].style.backgroundColor = "gray";
    }
    x[sliderIndex -1].style.display = "block";
    badge[sliderIndex -1].style.backgroundColor = "#fff";
}