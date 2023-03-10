const countToDate = new Date().getTime() + 14 * 24 * 60 * 60 * 1000;

function countdown() {
    const today = new Date().getTime();
    const remainingTime = countToDate - today;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(remainingTime / msInDay);
    const displayHour = Math.floor((remainingTime%msInDay) / msInHour);
    const displayMinute = Math.floor((remainingTime%msInHour) / msInMinute);
    const displaySecond = Math.floor((remainingTime%msInMinute) / msInSecond);


    if (displayDay <= 9) {        
        document.querySelector("#days").textContent = `0${displayDay}`;
    } else {
        document.querySelector("#days").textContent = displayDay;
    }

    if (displayHour <= 9) {
        document.querySelector("#hours").textContent = `0${displayHour}`;
    } else {
        document.querySelector("#hours").textContent = displayHour;
    }

    if (displayMinute <= 9) {
        document.querySelector("#minutes").textContent = `0${displayMinute}`;
    } else {
        document.querySelector("#minutes").textContent = displayMinute;
    }

    if (displaySecond <= 9) {
        document.querySelector("#seconds").textContent = `0${displaySecond}`;
    } else {
        document.querySelector("#seconds").textContent = displaySecond;
    }

    if (remainingTime <= 0 ) {
        document.querySelector("#days").textContent = 0;
        document.querySelector("#hours").textContent = 0;
        document.querySelector("#minutes").textContent = 0;
        document.querySelector("#seconds").textContent = 0;
        clearInterval(timer);
    }
}

let timer = setInterval(countdown, 1000);
