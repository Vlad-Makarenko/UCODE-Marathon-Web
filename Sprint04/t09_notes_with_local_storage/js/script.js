let AreaInput = document.getElementById("area");
var OutputInput = document.getElementById("output");

function getFormattedDate(dateObject) {
    let result = 
    (dateObject.getDate() < 10 ? '0' + dateObject.getDate() : dateObject.getDate()) + '.' +
    (dateObject.getMonth() + 1 < 10 ? '0' + (dateObject.getMonth() + 1) : (dateObject.getMonth() + 1)) + '.' +
    dateObject.getFullYear() + ', ' +
    (dateObject.getHours() < 10 ? '0' + dateObject.getHours() : dateObject.getHours()) + ':' +
    (dateObject.getMinutes() < 10 ? '0' + dateObject.getMinutes() : dateObject.getMinutes()) + ':' +
    (dateObject.getSeconds() < 10 ? '0' + dateObject.getSeconds() : dateObject.getSeconds());
    return result;
}


function addCoociesFunc(){
    let input = AreaInput.value;
    if(input.length === 0){
        alert('It\'s empty. Try to input something in \"Text input\"');
    }else {
        localStorage.setItem('input', `${input} [${getFormattedDate(new Date())}]`);
        OutputInput.value += '--> ' + localStorage.getItem('input') + '\n';
    }
}

function clearCoocies(){
    localStorage.removeItem('input');
    OutputInput.value = '';
    AreaInput.value = '';
}
