
function get_animal(){
    let animal = prompt("What animal is the superhero most similar to?");
    let regex = new RegExp("^([A-Za-z]){1,20}$");
    if(regex.test(animal)){
        return animal;
    }else {
        return null;
    }
}

function get_sex(){
    let sex = prompt("Is the superhero male or female? Leave blank if unknown or other.");
    if(sex == "male" || sex == "female" || sex == ""){
        return sex;
    } else {
        return null;
    }
}

function get_age(){
    let age =  prompt("How old is the superhero?");
    let regex = new RegExp("^[1-9]([0-9]){0,4}$");
    if(regex.test(age)){
        return age;
    }else{
        return null;
    }
}

function generete_description(animal, sex, age){
    let description = "The superhero name is: ";
    let intAge = Number(age);
    if(sex == "male" && intAge < 18){
        description += animal + "-boy!"
    } else if (sex == "male" && intAge >= 18) {
        description += animal + "-man!"
    } else if (sex == "female" && intAge < 18) {
        description += animal + "-girl!"
    } else if (sex == "female" && intAge >= 18) {
        description += animal + "-woman!"
    } else if (sex == "" && intAge < 18) {
        description += animal + "-kid!"
    } else if (sex == "" && intAge >= 18) {
        description += animal + "-hero!"
    }
    alert(description);

}


function main(){
    
    let animal = get_animal();
    if(animal == null){
        alert("ERORR!");
        return;
    }
    let sex = get_sex();
    if(sex == null){
        alert("ERORR!");
        return;
    }
    let age = get_age();
    if(age == null){
        alert("ERORR!");
        return;
    }
    generete_description(animal, sex, age);
}

main();
