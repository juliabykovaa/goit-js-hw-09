const startButton = document.querySelector('[data-start]')
const stopButton = document.querySelector('[data-stop]')
let timerId = '';



startButton.addEventListener('click', () => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
    stopButton.disabled = false;
    startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
    document.body.style.backgroundColor = "";
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(timerId);

});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}