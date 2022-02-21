let converterShown = false;

let converter = document.getElementById("convertFieldset");
let clickConverter = document.getElementById("click");
let nonNumber = document.getElementsByClassName("NonNumber");
// let numbers = document.getElementsByClassName("Number");
let buttons = document.getElementsByTagName("button");
var css_hover = 'button:hover{ background-color: #00ff00 }';

var Answerinput = document.getElementById("answerInput");
var historyLable = document.getElementById("historyLable");

var select_from = document.getElementById("select_from");
var select_to = document.getElementById("select_to");

var savedHistory = "aboba";

for (let x = 0; x < buttons.length; x++){
    buttons[x].addEventListener('click', readvalue);
}

function doResult(){

    if(converterShown) {
        Answerinput.value = converter_func();
    }
    else {
        let inputInfo = Answerinput.value;
        if(!try_eval(inputInfo)){
            Answerinput.value = "Invalid Syntax";
            return 'aboba';
        } else {
            inputInfo = eval(inputInfo);
            Answerinput.value = inputInfo;
            return inputInfo
        }
    }
}

function try_eval(elem) {
    try {
        eval(elem);
    } catch (SyntaxError) {
        return false;
    }
    return true;
}


/**
 * 
 * @param {Event} event 
 */

function readvalue(event){
    let valueBtn = event.target.value;
    if(valueBtn === "clear"){
        Answerinput.value = '';
    } else if (valueBtn === '='){
        historyLable.value = Answerinput.value;
        doResult();
    }else if (valueBtn == '0' || valueBtn == '1' || valueBtn == '2' || valueBtn == '3' 
            || valueBtn == '4' || valueBtn == '5' || valueBtn == '6' || valueBtn == '7' 
            || valueBtn == '8' || valueBtn == '9' || valueBtn == '.' 
            || valueBtn == '(' || valueBtn == ')'){
                Answerinput.value += valueBtn;
    }
    else if(valueBtn == 'Pi'){
        Answerinput.value += Math.PI;
    }
    else if (valueBtn == "memClear") {
        savedHistory = 'aboba';
    }
    else  if (valueBtn == "memRead") {
        if(savedHistory != "aboba") {
            Answerinput.value = savedHistory;
        } 
    }
    else if (valueBtn == "memSave") {
        savedHistory = doResult(); //
        Answerinput.value = '';
    }
    else if (valueBtn == "memAdd") {
        if(valueBtn != "aboba") {
            Answerinput.value += " + " + savedHistory;
            doResult();
        }
    }
    else if (valueBtn == "memMinus") {
        if(valueBtn != "aboba") {
            Answerinput.value += " - " + savedHistory;
            doResult();
        }
    }
    else if(valueBtn == "+" ||  valueBtn == "-" || valueBtn == "/" || valueBtn == "*" ) {
        Answerinput.value += " " + `${valueBtn}` + " ";
    } else if (valueBtn == 'root'){
        let oldinput = Answerinput.value;
        let dosqrt = doResult();
        if(dosqrt != "aboba"){
            historyLable.value = "√(" + oldinput + ")";
            Answerinput.value = Math.sqrt(dosqrt);
        }
    } else if (valueBtn == 'factorial'){
        let oldinput = Answerinput.value;
        let dofact = doResult();
        if(dofact != "aboba"){
            historyLable.value = "(" + oldinput + ")!";
            Answerinput.value = factorial(dofact);
        }
    } else if( valueBtn == 'pow'){
        let oldinput = Answerinput.value;
        let dopow = doResult();
        if(dopow != "aboba"){
            historyLable.value = "(" + oldinput + ")^" + "2";
            Answerinput.value = Math.pow(dopow, 2);
        }
    } else if ( valueBtn == "sign"){
        let oldinput = Answerinput.value;
        let dosign = doResult();
        if(dosign != "aboba"){
            historyLable.value = "negative(" + oldinput + ")";
            Answerinput.value = eval(`${dosign} * -1` )
        }
    }
}


function factorial(n){
    if (n == 1) return 1;
    else return n * factorial(n-1);		
}




function converter_func() {
    var value_from = select_from.options[select_from.selectedIndex].value;
    var value_to = select_to.options[select_to.selectedIndex].value;

    switch (value_from){
        case 'cm':
            switch (value_to){
                case 'cm':
                    return Answerinput.value;
                case 'm':
                    return Answerinput.value / 100;
                case 'km':
                    return Answerinput.value / 100000;    
                default:
                    Answerinput.value = "Invalid Syntax";
            }
            break;
        case 'm':
            switch (value_to){
                case 'cm':
                    return Answerinput.value * 100;
                case 'm':
                    return Answerinput.value;
                case 'km':
                    return Answerinput.value / 1000;  
                default:
                    Answerinput.value = "Invalid Syntax";
            } 
            break;
        case 'km':
            switch (value_to){
                case 'cm':
                    return Answerinput.value * 100000;
                case 'm':
                    return Answerinput.value * 1000;
                case 'km':
                    return Answerinput.value;  
                default:
                    Answerinput.value = "Invalid Syntax";
            } 
            break;   
         case 'g':
            switch (value_to){
                case 'g':
                    return Answerinput.value;
                case 'kg':
                    return Answerinput.value / 1000;
                case 't':
                    return Answerinput.value / 1000000; 
                default:
                    Answerinput.value = "Invalid Syntax"; 
            } 
            break;
        case 'kg':
            switch (value_to){
                case 'g':
                    return Answerinput.value * 1000;
                case 'kg':
                    return Answerinput.value;
                case 't':
                    return Answerinput.value / 1000;  
                default:
                    Answerinput.value = "Invalid Syntax";
            } 
            break;         
        case 't':
            switch (value_to){
                case 'g':
                    return Answerinput.value * 1000000;
                case 'kg':
                    return Answerinput.value * 1000;
                case 't':
                    return Answerinput.value;  
                default:
                    Answerinput.value = "Invalid Syntax";
            } 
            break;
        case 'scm':
            switch (value_to){
                case 'scm':
                    return Answerinput.value;
                case 'sm':
                    return Answerinput.value / 10000;
                case 'skm':
                    return Answerinput.value / 10000000000;  
                default:
                    Answerinput.value = "Invalid Syntax";
            } 
            break;
        case 'sm':
            switch (value_to){
                case 'scm':
                    return Answerinput.value * 10000;
                case 'sm':
                    return Answerinput.value;
                case 'skm':
                    return Answerinput.value / 1000000;  
                default:
                    Answerinput.value = "Invalid Syntax";
            } 
            break;
        case 'skm':
            switch (value_to){
                case 'scm':
                    return Answerinput.value * 10000000000;
                case 'sm':
                    return Answerinput.value * 1000000;
                case 'skm':
                    return Answerinput.value;  
                default:
                    Answerinput.value = "Invalid Syntax";
            } 
            break;                                     
    }
}




function showConverter(){
    if(converterShown){
        converter.style.display = 'none';
        converterShown = false;
        clickConverter.innerHTML = "Show converter";
        for(let x = 0; x < nonNumber.length; x++){
            nonNumber[x].disabled = false;
            nonNumber[x].style.backgroundColor = "#8243add0";
            nonNumber[x].style = css_hover;
        }

    } else {
        converter.style.display = 'unset';
        converterShown = true;
        clickConverter.innerHTML = "Close converter";
        for(let x = 0; x < nonNumber.length; x++){
            if (nonNumber[x].value == 'clear') continue;
            nonNumber[x].disabled = true;
            nonNumber[x].style.backgroundColor = "#5a5a5a";
        }
    }
}

 

