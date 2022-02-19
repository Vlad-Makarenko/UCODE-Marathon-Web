
function Numbers(){
    let start_num = Number(prompt("start num ?", '1'));
    let end_num = Number(prompt("end num ?", '100'));
    for(let num = start_num; num <= end_num; num++){
        let result = "";
        result += num;
        if(num % 2 == 0 && num % 3 == 0 ){
            result += " is even, a multiple of 3";
        } else if(num % 2 == 0){
            result += " is even";
        } else if(num % 3 == 0){
            result += " is a multiple of 3";
        }
        if(num % 10 == 0){
            result += ", a multiple of 10"
        }
        if(result.length <=5){
            result += " -";
        }
        
        console.log(result + "\n");
    }
}


Numbers();
