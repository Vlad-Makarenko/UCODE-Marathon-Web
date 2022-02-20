function transformation(){
    let banner = document.getElementById("lab");
    let name = document.getElementById("hero");

    if(name.innerHTML == "Bruce Banner"){
        name.innerHTML = "Hulk";
        name.style.fontSize = "130px";
        name.style.letterSpacing = "6px";
        banner.style.backgroundColor = "#70964b";
    } else if(name.innerHTML == "Hulk") {
        name.innerHTML = "Bruce Banner";
        name.style.fontSize = "60px";
        name.style.letterSpacing = "2px";
        banner.style.backgroundColor = "#ffb300";
    }

}