//Creating a UI class for the Manipulation of the UI elements
class UI{
    constructor(){
        //So i grabbed the ids and classes of elements i want to manipulate here
        this.date = document.querySelector('.date-stamp');
        this.cityLocation = document.querySelector('.city__location');
        this.cityLocationCard = document.querySelector('.city__location--card');
        this.temp = document.querySelector('.weather__info--temp');
        this.temp1 = document.querySelector('.weather__info--temp1');
        this.description = document.querySelector('.weather__info--message');
        this.city = document.querySelector('.weather-card__loc-city');
        this.country = document.querySelector('.weather-card__loc-country');
        this.cloudValue = document.querySelector('#w-cloudy-value');
        this.percipitationValue = document.querySelector('#w-precipitation-value');
        this.humidityValue = document.querySelector('#w-humidity-value');
        this.windValue = document.querySelector('#w-wind-value');
    }
    //
    showCard(weatherDetails){
        //This shows a card based on the conditions
        //Cloudy or Clear Sky conditions
        if((weatherDetails.weather[0].description.includes("clouds") || weatherDetails.weather[0].description.includes("clear") )){
            //This makes the cloudy weather card active by displaying the styles of others to none 

            const main = document.querySelector('#main-weather-card').style.display = 'none';

            const cloudy = document.querySelector('#cloudy-weather-card').style.display = 'flex';

            const rainy = document.querySelector('#rainy-weather-card').style.display = 'none';

            const sunny = document.querySelector('#sunny-weather-card').style.display = 'none';

            //This brings the details of the cloudy or clear weather from the api
            this.cloudyWeather(weatherDetails);

            //Rainy weather conditions
        }else if(weatherDetails.weather[0].description.includes("rain")){

           // This makes the rainy weather card active and others inactive

            const main = document.querySelector('#main-weather-card').style.display = 'none';

            const cloudy = document.querySelector('#cloudy-weather-card').style.display = 'none';

            const rainy = document.querySelector('#rainy-weather-card').style.display = 'flex';

            const sunny = document.querySelector('#sunny-weather-card').style.display = 'none';

            //This brings the details of the rainy weather from the api
            this.rainyWeather(weatherDetails);

            //Sunny Weather Conditions
        }else if(weatherDetails.weather[0].description.includes("sunny")){

            //This makes the sunny weather card active and others inactive

            const main = document.querySelector('#main-weather-card').style.display = 'none';

            const cloudy = document.querySelector('#cloudy-weather-card').style.display = 'none';

            const rainy = document.querySelector('#rainy-weather-card').style.display = 'none';

            const sunny = document.querySelector('#sunny-weather-card').style.display = 'flex';

            //This brings the details of the sunny weather from the api
            this.sunnyWeather(weatherDetails);
        }

    }
     cloudyWeather(weatherDetails){
       //  This is gotten from the weather api data for cloudy weather
        this.temp.innerHTML = `
        ${weatherDetails.main.temp}
        <span class="weather__info--temp-deg">o</span>
        ` ;

        this.temp1.innerHTML = ` ${weatherDetails.main.temp}
        <span class="weather__info--temp-deg">o</span>`;

        this.description.innerHTML = `
        ${weatherDetails.weather[0].description}
        `;

        this.cityLocation.innerHTML = `
        ${weatherDetails.name},${weatherDetails.sys.country}`;

        this.cityLocationCard.innerHTML = `
        ${weatherDetails.name},${weatherDetails.sys.country}`;

        this.city.innerHTML = `${weatherDetails.name}`;

        this.country.innerHTML = `${weatherDetails.sys.country} `;

        this.cloudValue.innerHTML = `${weatherDetails.clouds.all}% `;

        this.percipitationValue.innerHTML = `${weatherDetails.main.pressure}hpa `;

        this.humidityValue.innerHTML = `${weatherDetails.main.humidity}% `;

        this.windValue.innerHTML = `${weatherDetails.wind.speed}km/h `;
        
     }
     rainyWeather(weatherDetails){
         //  This is gotten from the weather api data for rainy weather
       this.temp.innerHTML = `
        ${weatherDetails.main.temp}
        <span class="weather__info--temp-deg">o</span>
        ` ;

        this.temp1.innerHTML = ` ${weatherDetails.main.temp}
        <span class="weather__info--temp-deg">o</span>`;

        this.description.innerHTML = `
        ${weatherDetails.weather[0].description}
        `;

        this.cityLocation.innerHTML = `
        ${weatherDetails.name},${weatherDetails.sys.country}`;

        this.cityLocationCard.innerHTML = `
        ${weatherDetails.name},${weatherDetails.sys.country}`;

        this.city.innerHTML = `${weatherDetails.name}`;

        this.country.innerHTML = `${weatherDetails.sys.country} `;

        this.cloudValue.innerHTML = `${weatherDetails.clouds.all}% `;

        this.percipitationValue.innerHTML = `${weatherDetails.main.pressure}hpa `;

        this.humidityValue.innerHTML = `${weatherDetails.main.humidity}% `;
        
        this.windValue.innerHTML = `${weatherDetails.wind.speed}km/h `;
        
     }
     sunnyWeather(weatherDetails){
         //  This is gotten from the weather api data for sunny weather
         
        this.temp.innerHTML = `
        ${weatherDetails.main.temp}
        <span class="weather__info--temp-deg">o</span>
        ` ;

        this.temp1.innerHTML = ` ${weatherDetails.main.temp}
        <span class="weather__info--temp-deg">o</span>`;

        this.description.innerHTML = `
        ${weatherDetails.weather[0].description}
        `;

        this.cityLocation.innerHTML = `
        ${weatherDetails.name},${weatherDetails.sys.country}`;

        this.cityLocationCard.innerHTML = `
        ${weatherDetails.name},${weatherDetails.sys.country}`;

        this.city.innerHTML = `${weatherDetails.name}`;

        this.country.innerHTML = `${weatherDetails.sys.country} `;

        this.cloudValue.innerHTML = `${weatherDetails.clouds.all}% `;

        this.percipitationValue.innerHTML = `${weatherDetails.main.pressure}hpa `;

        this.humidityValue.innerHTML = `${weatherDetails.main.humidity}% `;
        
        this.windValue.innerHTML = `${weatherDetails.wind.speed}km/h `;
        
     }
}


export const ui = new UI();