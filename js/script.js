//time and date

const time = document.querySelector('.time');
const date = document.querySelector('.date');

const showDate = () => {
    const dateD = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = dateD.toLocaleDateString('en-EN', options);
    date.textContent = currentDate;
}
const showTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
}
showTime();

// greeting

 const greeting = document.querySelector('.greeting');
 const getTimeOfDay = () => {
    if (hours > 5 && hours < 12) {
       return 'morning'; 
    } else if (hours >= 12 && hours < 18) {
        return 'afternoon';
    } else if (hours >= 18 && hours < 24) {
        return 'evening';
    }
    else if (hours >= 0 && hours < 6) {
        return 'night';
    }
}

const showGreeting = () => {
    const date = new Date();
    hours = date.getHours();
    getTimeOfDay()
    const timeOfDate = getTimeOfDay();
    greeting.textContent = `Good ${timeOfDate}`;
}
showGreeting()

//name LocalStorage

const nameUser = document.querySelector('.name');
const setLocalStorage = () => {
    localStorage.setItem('nameUser', nameUser.value);
}
window.addEventListener('beforeunload', setLocalStorage);
 
const getLocalStorage = () => {
    if (localStorage.getItem('nameUser')) {
        nameUser.value = localStorage.getItem('nameUser');
    }
}
window.addEventListener('load', getLocalStorage);

//Change BackGround Image

const body = document.querySelector('body');

const getRandomNum = () => {
    return Math.floor(Math.random() * 20) + 1;
}

let randomNum = getRandomNum();

const setBg = () => {
    const timeOfDate = getTimeOfDay();
    const bgNum = randomNum.toString().padStart(2, '0');
//smooth change BackGround Image
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDate}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDate}/${bgNum}.jpg')`;
    }
}

setBg()

//Slaider change BackGround Image

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

function getSlideNext() {
     randomNum < 20 ? (randomNum++) : (randomNum = 1);
     setBg() 
}
function getSlidePrev() {
    randomNum > 1 ? (randomNum--) : (randomNum = 20);
    setBg() 
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

// weather
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=313445949dd6e620b03c5721573a7c81&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;

    wind.textContent = `${data.wind.speed}`;
    humidity.textContent = `${data.main.humidity}`;
    
    weatherDescription.textContent = data.weather[0].description;}
getWeather()

city.addEventListener('change', getWeather)

//






