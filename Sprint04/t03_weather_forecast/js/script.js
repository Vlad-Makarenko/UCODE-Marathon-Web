var Key = "ae7ab087248a49fc954151636222002";
var city = "Kharkiv";
var url = `http://api.weatherapi.com/v1/forecast.json?key=${Key}&q=${city}&days=7`;


var allImages = document.getElementsByTagName("img");
var allTemp = document.getElementsByClassName("temp");
var allDate = document.getElementsByClassName("date");


async function getAPI () {
    let response = await fetch(url);

    return await response.json();
}

function set(date, day) {
    allImages[day].src = date.forecast.forecastday[day].day.condition.icon;
    allTemp[day].innerHTML = date.forecast.forecastday[day].day.avgtemp_c + '°';
    let correctDate = date.forecast.forecastday[day].date.split('-');
    let res = correctDate[2] + "." + correctDate[1];
    allDate[day].innerHTML = res;
}

function displayAll(){
    let weather = getAPI();
    weather.then(date => {
        console.log(date);

        for(let x = 0; x < date.forecast.forecastday.length; x++){
            set(date, x);
        }
        
    })


}

displayAll();
