import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const timePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysLeft = document.querySelector(`[data-days]`);
const hoursLeft = document.querySelector(`[data-hours]`);
const minutesLeft = document.querySelector(`[data-minutes]`);
const secondsLeft = document.querySelector(`[data-seconds]`);
startButton.disabled = true;
let timerId = '';
let selectedDate = '';


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose([selectedDates]) {
        selectedDate = selectedDates;
      if (selectedDate < Date.now()) {
          startButton.disabled = true;
          window.alert("Please choose a date in the future")
          con
      } else {
          startButton.disabled = false;
          return
      }

  },
};

flatpickr(timePicker, options); 

startButton.addEventListener('click', () => {
    timerId = setInterval(startTimer, 1000);
})

function startTimer() {
    startButton.disabled = true;
    const timeNow = Date.now();
    const timeDifference = selectedDate - timeNow;
    const convertedTime = convertMs(timeDifference);
    renderDate(convertedTime);
    if (timeDifference <= 0) {
        window.alert('Time is up!');
        clearInterval(timerId);
        setDefaultTime()
        return;
    }
}

function renderDate({seconds, minutes, hours, days}) {
    secondsLeft.textContent =  addLeadingZero(seconds);
    minutesLeft.textContent =  addLeadingZero(minutes);
    hoursLeft.textContent =  addLeadingZero(hours);
    daysLeft.textContent =  addLeadingZero(days);
}

function addLeadingZero(value) { 
  return String(value).padStart(2 , '0');
}

function setDefaultTime() {
    secondsLeft.textContent = "00"
    minutesLeft.textContent = "00"
    hoursLeft.textContent = "00"
    daysLeft.textContent = "00"
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = (Math.floor(ms / day));
    // Remaining hours
    const hours = (Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = (Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = (Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
}
  
