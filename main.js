let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let timerRef = document.getElementById('display');
let int = null;

// Start the stopwatch
document.getElementById('start').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);  // Update every 10 milliseconds (0.01 seconds)
});

// Pause the stopwatch
document.getElementById('pause').addEventListener('click', () => {
    clearInterval(int);
});

// Reset the stopwatch
document.getElementById('reset').addEventListener('click', () => {
    clearInterval(int);
    [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
    timerRef.innerHTML = '00:00:00:000';
});

// Function to update the display
function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 100 ? "0" + (milliseconds < 10 ? "0" + milliseconds : milliseconds) : milliseconds;

    timerRef.innerHTML = `${h}:${m}:${s}:${ms}`;
}
