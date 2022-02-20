let AreaInput = document.getElementById("area");
var OutputInput = document.getElementById("output");

var addBtn = document.getElementById("addCoocies");
var clearBtn = document.getElementById("clearCoocies");


function addCoociesFunc(){
    let input = AreaInput.value;
    if(input.length === 0){
        alert('It\'s empty. Try to input something in \"Text input\"');
    }else {
        document.cookie = input;
        OutputInput.value += '--> ' + input + '\n';
    }
}

function clearCoocies(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    OutputInput.value = "";
    AreaInput.value = "";
}
