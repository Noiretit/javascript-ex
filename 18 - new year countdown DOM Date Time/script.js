const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

const updateCountdown = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;

    // /1000 for the seconds; / 60 for minutes; / 60 again for hours; / 24 for days
    const d = Math.floor(difference / 1000 / 60 / 60 / 24);
    // % 24 gives us the remaining amount of hours
    const h = Math.floor(difference / 1000 / 60 / 60) % 24;
    // % 60 gives us the remaining minutes
    const m = Math.floor(difference / 1000 / 60) % 60;
    // % 60 gives us the remaining seconds
    const s = Math.floor(difference / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
};

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

setInterval(updateCountdown, 1000);