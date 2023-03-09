const countToDate = new Date().getTime() + 8 * 1000 * 60 * 60 * 24;

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


    document.querySelector("#days").textContent = displayDay;
    document.querySelector("#hours").textContent = displayHour;
    document.querySelector("#minutes").textContent = displayMinute;
    document.querySelector("#seconds").textContent = displaySecond;

    if (remainingTime <= 0 ) {
        document.querySelector("#days").textContent = 0;
        document.querySelector("#hours").textContent = 0;
        document.querySelector("#minutes").textContent = 0;
        document.querySelector("#seconds").textContent = 0;
        clearInterval(timer);
    }
}

let timer = setInterval(countdown, 1000);
