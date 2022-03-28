
class Avanger {
    constructor(name, mail, age, about, photo){
        this.name = name;
        this.mail = mail;
        this.age = age;
        this.about = about;
        this.photo = photo;
    }
}

let name = document.getElementById('name');
let mail = document.getElementById('mail');
let age = document.getElementById('age');
let about = document.getElementById('description');
let photo = document.getElementById('photo');
let Fpost = document.getElementById('Fpost');
let spans = document.getElementsByTagName('span')


function onSendClicked(){
    let newAvanger = new Avanger(name.value, mail.value, age.value, about.value, photo.value);
    Fpost.style.display = 'unset';
    spans[0].innerHTML = newAvanger.name;
    spans[1].innerHTML = newAvanger.mail;
    spans[2].innerHTML = newAvanger.age;
    spans[3].innerHTML = newAvanger.about;
    spans[4].innerHTML = newAvanger.photo;
    return newAvanger;
}

function onClearClicked(){
    Fpost.style.display = 'none';
    name.value = '';
    mail.value = '';
    age.value = '';
    about.value = '';
    photo.value = '';
}


