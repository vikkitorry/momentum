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
 let hours

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
setBg();

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
city.value = 'Krasnoyarsk';

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=313445949dd6e620b03c5721573a7c81&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;

    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    
    weatherDescription.textContent = data.weather[0].description;
}
getWeather()
city.addEventListener('change', getWeather);

// quotes

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

async function getQuotes() {  
    const quotes = './js/data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    let rundomQuote = Math.floor(Math.random() * 7);
    quote.textContent = data[rundomQuote].text;
    author.textContent = data[rundomQuote].author;
  }
getQuotes()
changeQuote.addEventListener('click', getQuotes);

//audio

const play = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
let isPlay = false;
const audio = new Audio();
let playNum = 0;

//add new element 'li'
playList.forEach(elm => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = elm.title;
    playListContainer.append(li)
})
const itemPlay = document.querySelectorAll('.play-item');

function playAudio() {
    if (!isPlay) {
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
        for (let i = 0; i < itemPlay.length; i++) {
            if (itemPlay[i].classList.contains('item-active') === true) {
                itemPlay[i].classList.remove('item-active');
            }	
        }
        itemPlay[playNum].classList.add('item-active');
        play.classList.add('pause');
    } else {
        isPlay = false;
        play.classList.remove('pause');
        audio.pause();
    }
}
play.addEventListener('click', playAudio);

function playPrev() {
    if (playNum > 0) {
        playNum--;
        isPlay = false;
        playAudio()
    } else {
        playNum = 4;
        isPlay = false;
        playAudio()
    }
}

function playNext() {
    if (playNum < 4) {
        playNum++;
        isPlay = false;
        playAudio()
    } else {
        playNum = 0;
        isPlay = false;
        playAudio()
    }  
}

playPrevBtn.addEventListener('click', playPrev);
playNextBtn.addEventListener('click', playNext);
audio.addEventListener('ended', function() {
    playNext();
});

import playList from './playList.js';

// advanced audio
/*
const progressPlay = document.querySelector('.play-progress');
const songCurrentTime = document.querySelector('.song-time');
const songDuration = document.querySelector('.song-duration');

ПОДКЛЮЧИТЬ ПОЛЗУНОК К МУЗЫКЕ

function updateProgressValue() {
    progressPlay.max = audio.duration;
    progressPlay.value = audio.currentTime;
    songCurrentTime.innerHTML = (formatTime(Math.floor(audio.currentTime)));
};

function formatTime(seconds) {
    let minutes = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${minutes}:${sec}`;
};
*/


//settings

















