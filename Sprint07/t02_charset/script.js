let blocks = document.getElementsByClassName('block');
let textArea = document.getElementsByClassName('textArea');
let selections = document.getElementsByTagName('option');


for (let index = 0; index < textArea.length; index++) {
    if(textArea[index].innerHTML != ''){
        blocks[index].style.display = 'unset';
    }
}
