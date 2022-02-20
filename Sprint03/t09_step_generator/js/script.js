let start = 1;
while(true){
    let value = prompt(`Previous result: ${start}. Enter a new number:`);

    if(isNaN(value)){
        console.error('Invalid number!');
    }else {
        start += Number(value);
    }
    if(value === "exit"){
        break;
    }
    if(start > 10000){
        start = 1;
    }
}