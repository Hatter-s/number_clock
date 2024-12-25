console.log(new Date().getSeconds());
const HOUR_NUMBER = document.querySelectorAll('.hour-number');
const MINUTE_NUMBER = document.querySelectorAll('.minute-number');
const SECOND_NUMBER = document.querySelectorAll('.second-number');
const HOUR_CONTAINER = document.getElementById('hour');
const MINUTE_CONTAINER = document.getElementById('minute');
const SECOND_CONTAINER = document.getElementById('second');

setInterval(() => {
    const CurrentDate = new Date();
    const SECONDS = CurrentDate.getSeconds();
    const MINUTES = CurrentDate.getMinutes();
    const HOURS = CurrentDate.getHours();
    console.log(`${HOURS}:${MINUTES}:${SECONDS}`);

    // HOUR
    HOUR_CONTAINER.style.transform = `rotate(${HOURS * 30}deg)`; // 360/12
    HOUR_CONTAINER.style.bottom = `calc(cos(${HOURS * 30}deg) * 60px)`;
    HOUR_CONTAINER.style.left = `calc(sin(${HOURS * 30}deg) * 60px)`;
    HOUR_NUMBER.forEach((hourElement) => {
        hourElement.innerHTML = HOURS;
        hourElement.style.transform = `rotate(${-HOURS * 30}deg)`; // 360/12
    })

    // MINUTE
    MINUTE_CONTAINER.style.transform = `rotate(${MINUTES * 6}deg)`; // 360/60
    MINUTE_CONTAINER.style.bottom = `calc(cos(${MINUTES * 6}deg) * 50px)`;
    MINUTE_CONTAINER.style.left = `calc(sin(${MINUTES * 6}deg) * 50px)`;
    MINUTE_NUMBER.forEach((minuteElement) => {
        minuteElement.innerHTML = MINUTES;
        minuteElement.style.transform = `rotate(${-MINUTES * 6}deg)`; // 360/60
    })

    // SECOND
    SECOND_CONTAINER.style.transform = `rotate(${SECONDS * 6}deg)`; // 360/60
    SECOND_CONTAINER.style.bottom = `calc(cos(${SECONDS * 6}deg) * 40px)`;
    SECOND_CONTAINER.style.left = `calc(sin(${SECONDS * 6}deg) * 40px)`;
    SECOND_NUMBER.forEach((secondElement) => {
        secondElement.innerHTML = SECONDS;
        secondElement.style.transform = `rotate(${-SECONDS * 6}deg)`; // 360/60
    })
}, 1000); //1 sec