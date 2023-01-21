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
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDate}/${bgNum}.jpg')`;
}

setBg()

//slaider

const getSlideNext = () => {

}







