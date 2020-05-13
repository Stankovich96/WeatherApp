import { http } from './http.js';
import { ui } from './ui.js';

//Get posts on DOM load
document.addEventListener('DOMContentLoaded', checkLocation);

//Check Modal value
document.querySelector('.popup__button').addEventListener('click', modalValue);

function checkLocation(){
//Defining UI vars and hiding the cards
const main = document.querySelector('#main-weather-card').style.display = 'flex';

const cloudy = document.querySelector('#cloudy-weather-card').style.display = 'none';

const rainy = document.querySelector('#rainy-weather-card').style.display = 'none';

const sunny = document.querySelector('#sunny-weather-card').style.display = 'none';



//if the Geolocation is sucessful it query's the api using the long and lat gotten
function success(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log('Woah we are good to go'); 

    console.log(latitude);
    console.log(longitude);

     //Get weather
     http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=02aac41d63ef444b5cec3f492da360b9`)
     .then(data => ui.showCard(data))
     .catch(err => console.log(err));

}

//If Geolocation isnt successful it returns an error
function error(){
    console.log("Unable to retrieve your location"); 
}

//The geolocatio conditions
if(!navigator.geolocation){
    console.log("Geolocation is not supported in this browser");
    
}else{
    console.log("Locating");
    navigator.geolocation.getCurrentPosition(success, error);
}

}

//This function is triggered if the user decides to manual change the uhmm location from the modal
function modalValue(){

    //This gets the value of the City
    const modalCity = document.querySelector('#modal-textCity').value;

    //This gets the value of the Country
    const modalCountry = document.querySelector('#modal-textCountry').value;

    //Dummy console.log to be sure it got the text from the modal
    console.log(modalCity);
    console.log(modalCountry);
    
    //Get weather
    http.get(`https://api.openweathermap.org/data/2.5/weather?q=${modalCity},${modalCountry}&units=metric&appid=02aac41d63ef444b5cec3f492da360b9`)
    .then(data => ui.showCard(data))
    .catch(err => console.log(err));
   
    //clear the fields after the api is run
    document.querySelector('#modal-textCity').value = '';
    document.querySelector('#modal-textCountry').value = '';
    
}




