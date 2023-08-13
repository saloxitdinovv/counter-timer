let counter = document.querySelector("h1");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let randomizer = document.querySelector(".random");
let reset = document.querySelector(".reset");

let count = 0;
let random = 0;

plus.onclick = () => {
  count++;
  counter.innerText = count + random;
};

minus.onclick = () => {
  count--;
  counter.innerText = count + random;
};

randomizer.onclick = () => {
  random = Math.floor(Math.random() * 200) - 100;
  counter.innerText = count + random;
};

reset.onclick = () => {
  count = 0;
  random = 0;
  counter.innerText = count;
};

let timer = document.querySelector(".timer");
let screen = timer.querySelector("h2");
let btns = timer.querySelectorAll("button");
let continueBtn = timer.querySelector(".continue");
let interval;
let time = 0;
let seconds = 0;
let minutes = 0;

let startBtn = document.querySelector('.start')
let stopBtn = document.querySelector('.stop')
let resetBtn = document.querySelector('.resetTimer')
btns.forEach((btn) => {
  btn.onclick = () => {
    let types = btn.getAttribute("data-type");

    switch (types) {
      case "start":
        start();
        break;
      case "stop":
        stopTimer();
        break;
      case "reset":
        resetTimer();
        break;
      case "continue":
        continueTimer();
        break;
    }
  };
});

function start() {
  clearInterval(interval);
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    screen.innerText = `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  }, 1000);
  stopBtn.removeAttribute("disabled")
  resetBtn.removeAttribute("disabled")
}

function stopTimer() {
  clearInterval(interval);
  continueBtn.style.display = "block";
  startBtn.setAttribute("disabled", true)
}

function continueTimer() {
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    screen.innerText = `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  }, 1000);
  continueBtn.style.display = "none";
}

function resetTimer() {
  continueBtn.style.display = "none";
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  screen.innerText = "00:00";
  startBtn.removeAttribute("disabled")
  stopBtn.setAttribute("disabled", true)
  resetBtn.setAttribute("disabled", true)
}
