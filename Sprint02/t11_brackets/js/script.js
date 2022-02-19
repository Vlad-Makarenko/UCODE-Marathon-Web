function checkBrackets(str) {

    if(typeof(str) != "string"){
        return -1;
    }

    if(str.indexOf('(') == -1 && str.indexOf(')')){
        return -1;
    }

    let opened_br = 0;
    let closed_br = 0;

    for (let i = 0; i < str.length; i++) {
        let sym = str.charAt(i);

        if (sym == '(') {
            opened_br++;
        }
        else if (sym == ')') {
            if (opened_br == 0) {
                closed_br++;
            }
            else {
                opened_br--;
            }
        }
    }

    return opened_br + closed_br;
}