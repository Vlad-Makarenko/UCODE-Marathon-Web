function greeting(){
    let regex = /^[a-zA-Z]+$/;
    let name = prompt("Your name?");
    let surname = prompt("Your surname?");

    if(name.match(regex) && surname.match(regex)){
        name = name.charAt(0).toUpperCase() + name.slice(1);
        surname = surname.charAt(0).toUpperCase() + surname.slice(1);
        alert("Hello, " + name + " " + surname + '!');
        console.log("Hello, " + name + " " + surname + '!');
    } else {
        alert("Wrong input!");
        console.log("Wrong input!");
    }

}

greeting();
