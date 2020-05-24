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


/**
 *  Quick location search form
 */
document.querySelectorAll(".search").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("ok");
      popupModal.style.opacity = "1";
      popupModal.style.visibility = "visible";
      popupModal.querySelector(".popup__content").style.opacity = "1";
      popupModal.querySelector(
        ".popup__content"
      ).style.transform = `translate(-50%, -50%) scale(1)`;
      console.log("ok2");
    });
  });
  





/**
 *  Get the modal by id
 */
const popupModal = document.querySelector('#modal-popup');

/**
 *  Open modal
 */
document.querySelectorAll("#change-button", ".city__link").forEach((button) => {
    button.addEventListener("click", () => {
      console.log("ok");
      popupModal.style.opacity = "1";
      popupModal.style.visibility = "visible";
      popupModal.querySelector(".popup__content").style.opacity = "1";
      popupModal.querySelector(
        ".popup__content"
      ).style.transform = `translate(-50%, -50%) scale(1)`;
      console.log("ok2");
    });
  });

/**
 *  close modal function
 */
function closeModal(){
    popupModal.style.opacity = '0';
    //popupModal.style.visibility = 'hidden';
    popupModal.style.display = 'none';
    popupModal.querySelector('.popup__content').style.opacity = '0';
}


/**
 *  When the user clicks the close button of the modal, close it
 */
document.querySelector('.popup__close').addEventListener('click', ()=>{
    closeModal();
});



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

    closeModal(); // Close the modal
}


/**
 *  Setup and insert DateStamp
 */
function currentDateStamp(){
    const date = new Date;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const options2 = { hour12: true, hour: 'numeric', minute: 'numeric' };
    const dateStamp = `${new Intl.DateTimeFormat('en-UK', options2).format(date)} - ${new Intl.DateTimeFormat('en-NG', options).format(date)}`;
    // Insert the datestamp for every date-stamp element fields
    document.querySelectorAll('.date-stamp, #weather___footer .date-stamp').forEach(element => element.innerHTML = dateStamp);
}

setInterval(currentDateStamp, 1000); // Run the currentDateStamp function in every 1 seconds

