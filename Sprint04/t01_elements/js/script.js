var characters = document.getElementById("characters").children;
for(let x = 0; x < characters.length; x++){
    if(characters[x].className !== "good"
        && characters[x].className !== "evil"
        && characters[x].className !== "unknown" ){
            characters[x].className = "unknown";
    }
    let data_elem = characters[x].getAttribute("data-element");
    if(!data_elem) characters[x].setAttribute("data-element", "none");
    characters[x].appendChild(document.createElement("br"));
    let abilities = characters[x].getAttribute("data-element").split(' ');
    for(let i = 0; i < abilities.length; i++){
        let div_tag = document.createElement("div");
        div_tag.setAttribute("class", `elem ${abilities[i]}`);
        if(abilities[i] === "none"){
            let none_elem = document.createElement("div");
            none_elem.setAttribute("class", 'line');
            div_tag.appendChild(none_elem);
        }
        characters[x].appendChild(div_tag);
    }
}