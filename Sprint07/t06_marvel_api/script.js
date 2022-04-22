const apiBtn = document.getElementById('getApiBtn');
const Data = document.getElementById('Data');
const ApiUrl = '/marvel_api'

function createObj(prop){
    const newBlock = document.createElement('div');
    newBlock.className = 'obj';
    const bold = document.createElement('b');
    bold.innerHTML = `${prop}: `;
    newBlock.appendChild(bold);
    return newBlock;
}

function createStr(prop, value){
    const newBlock = document.createElement('div');
    newBlock.className = 'str';
    const label = document.createElement('label');
    label.innerHTML = `${prop}: `;
    newBlock.appendChild(label);
    const span = document.createElement('span');
    span.innerHTML = value;
    newBlock.appendChild(span);
    return newBlock;
}

function display_api (data, parent) {
    for(const prop in data){
        if(typeof (data[prop]) === 'object'){
            const newBlock =  createObj(prop);
            parent.appendChild(newBlock);
            display_api(data[prop], newBlock);
        }else{
            const newBlock = createStr(prop, data[prop]);
            parent.appendChild(newBlock);
        }
    }
}

function GetAPI(){
    apiBtn.style.display = 'none'

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('get', ApiUrl);

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.response);
            display_api(xhr.response, Data)
        }
    }

    xhr.onerror = () => {
        Data.innerText = xhr.responseText;
        console.error(xhr.responseText);
    }
    
    xhr.send()
}

