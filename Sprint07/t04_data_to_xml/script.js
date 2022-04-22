const ServerURL = 'http://localhost:3000/getData';
const fromXML = document.getElementById('fromXML');
const toXML = document.getElementById('toXML');

function GetData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', ServerURL);

    xhr.responseType = 'json';

    xhr.onload = () => {
        const data  =  xhr.response;
        console.log(data);
        fromXML.innerText = 'from XML:\n' + JSON.stringify(data.fromXML);
        toXML.innerText = 'to XML:\n' + data.toXML;
    }

    xhr.onerror = () => {
        console.error(xhr.response);
    }
    
    xhr.send()
}

