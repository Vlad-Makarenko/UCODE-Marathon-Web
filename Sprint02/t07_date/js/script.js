/**
 * 
 * @param {Date} date 
 */

function getFormattedDate(date){
    let monthDay = date.getDate();
    let result = "";
    if(monthDay < 10){
        result += "0" + monthDay;
    } else {
        result += monthDay;
    }
    result += ".";
    let month=  Number( date.getMonth()) + 1;
    if(month < 10){
        result += "0" + month;
    } else {
        result += month;
    }
    
    result += ".";
    result += date.getFullYear();
    result += " ";
    let hour = date.getHours();
    if(hour < 10){
        result += "0" + hour;
    }else {
        result += hour;
    }
    result += ":";
    let minutes = date.getMinutes();
    if(minutes < 10){
        result += "0" + minutes;
    }else {
        result += minutes;
    }
    result += " ";
    weekDay = date.getDay();
    switch(weekDay){
        case 1:
            result += "Monday";
            break;
        case 2:
            result += "Tuesday";
            break;
        case 3:
            result += "Wednesday";
            break;
        case 4:
            result += "Thursday";
            break;
        case 5:
            result += "Friday";
            break;
        case 6:
            result += "Saturday";
            break;
        case 7:
            result += "Sunday";
            break;

    }
    return result;

}
