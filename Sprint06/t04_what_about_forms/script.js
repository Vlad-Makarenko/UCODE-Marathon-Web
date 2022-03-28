
let infoSpan = document.getElementById('info');

function checkAnsw(){
   if(document.querySelector('input[name="same"]:checked').value == "true"){
       info.innerHTML = 'Good job so far';
   }else {
       info.innerHTML = 'Better luck next time';
   }
}