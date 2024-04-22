// let hour = document.getElementById('hour')
// let min = document.getElementById('min')
// let sec = document.getElementById('sec')

document.addEventListener('DOMContentLoaded', function () {
    let timer;
    let hoursInput = document.getElementById('hour');
    let minutesInput = document.getElementById('min');
    let secondsInput = document.getElementById('sec');
  
    let startButton = document.getElementById('start');
    let pauseButton = document.getElementById('pause');
    let resetButton = document.getElementById('reset');
  
    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);
  
    function startTimer() {
      let hours = parseInt(hoursInput.value) || 0;
      let minutes = parseInt(minutesInput.value) || 0;
      let seconds = parseInt(secondsInput.value) || 0;
  
      let totalSeconds = hours * 3600 + minutes * 60 + seconds;
  
      if (totalSeconds > 0) {
        timer = setInterval(function () {
          if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay(totalSeconds);
          } else {
            clearInterval(timer);
          }
        }, 1000);
      }
    }
  
    function pauseTimer() {
      clearInterval(timer);
    }
  
    function resetTimer() {
      clearInterval(timer);
      hoursInput.value = '';
      minutesInput.value = '';
      secondsInput.value = '';
      updateDisplay(0);
    }
  
    function updateDisplay(totalSeconds) {
      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds % 3600) / 60);
      let seconds = totalSeconds % 60;
  
      hoursInput.value = hours;
      minutesInput.value = minutes;
      secondsInput.value = seconds;
    }
  });