/**
 * 
 * @param {Number} count 
 * @param {Number} price 
 * @param {Number} curent_price 
 */
 function total(count, price, curent_price){
    let total_res = Number(count * price);
    if(curent_price != undefined){
        total_res += curent_price;
    }
    return total_res;
}
