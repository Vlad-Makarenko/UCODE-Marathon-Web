let images = [
    'assets/images/6.png',
    'assets/images/1.png',
    'assets/images/2.png',
    'assets/images/3.png',
    'assets/images/4.png',
    'assets/images/5.png'
]

var interval = 0;
var num = 0;

next();

function next() {
    var slider = document.getElementById("slider");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];

    clearInterval(interval);
    interval = setInterval(next, 3000);

}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}