
function concat (string1, string2=null){
    if (string2){
       return string1 + ' ' + string2;
    } else {
        let count = 0;
        return function obj() {
            count++;
            obj.count = count;
            string2 = prompt("Enter string", '');
            return string1 + " " + string2;
        };
    }
}