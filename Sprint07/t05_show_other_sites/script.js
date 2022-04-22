
const ServerURL = document.getElementById('url');
const Data = document.getElementById('Data');
const info = document.getElementById('info')

function GetData() {
    fetch(ServerURL.value)
    .then(resp=> resp.text()).then(body => Data.innerText = body) ; 
    // const xhr = new XMLHttpRequest();
    // console.log(ServerURL.value);
    // xhr.open('GET', ServerURL.value, false);

    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    


    // // xhr.onload = () => {
    // //     const data  =  xhr.response;
    // //     console.log(data);
    // //     Data.innerText = JSON.stringify(data.fromXML);
    // // }

    // xhr.onreadystatechange = () => {
    //     if(xhr.readyState == 4 && xhr.status == 200){
    //         Data.innerText = xhr.response;
    //     }
    // }

    // xhr.onerror = () => {
    //     Data.innerText = xhr.responseText;
    // }

    
    // xhr.send()
}
