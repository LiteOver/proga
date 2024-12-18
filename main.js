let num = 1;

const wheelImgs = document.querySelectorAll(
  ".wheel__container.turn div .wheel__container-img"
);

setInterval(() => {
  container.style.transform = "rotate(" + number + "deg)";
  document
    .querySelector(`.wheel__container div:nth-child(${num}) img`)
    ?.classList.add("active");
  number += 45;
  if (num == 1) {
    num += 7;
  } else {
    num--;
  }
  document.querySelector(".wheel__text n").textContent = i;

  if (i != 0) {
    i--;
  }
  if (wheel.style.transform == "rotate(45deg)") {
    document.querySelector(".eight img").classList.add("visible");
    for (let i of wheelImgs) {
      i.classList.add("rotate1");
    }
  } else if (wheel.style.transform == "rotate(90deg)") {
    document.querySelector(".seven img").classList.add("visible");
    for (let i of wheelImgs) {
      i.classList.add("rotate2");
      i.classList.remove('rotate1')
    }
  } else if (wheel.style.transform == "rotate(135deg)") {
    document.querySelector(".six img").classList.add("visible");
    for (let i of wheelImgs) {
      i.classList.add("rotate3");
      i.classList.remove('rotate2');
    }
  } else if (wheel.style.transform == "rotate(180deg)") {
    document.querySelector(".five img").classList.add("visible");
    for (let i of wheelImgs) {
      i.classList.add("rotate4");
      i.classList.remove('rotate3')
    }
  } else if (wheel.style.transform == "rotate(225deg)") {
    document.querySelector(".four img").classList.add("visible");
    for (let i of wheelImgs) {
      i.classList.add("rotate5");
      i.classList.remove('rotate4')
    }
  } else if (wheel.style.transform == "rotate(270deg)") {
    document.querySelector(".three img").classList.add("visible");
    for (let i of wheelImgs) {
      i.classList.add("rotate6");
      i.classList.remove('rotate5')
    }
  } else if (wheel.style.transform == "rotate(315deg)") {
    document.querySelector(".two img").classList.add("visible");
    for (let i of wheelImgs) {
      i.classList.add("rotate7");
      i.classList.remove('rotate5')
    }
  }
}, 1250);

let i = 7;


const progressBar = document.querySelector(".progress-bar");

setInterval(() => {
  const calcStyle = getComputedStyle(progressBar);
  const width = parseFloat(calcStyle.getPropertyValue("--width")) || 0;
  progressBar.style.setProperty("--width", width + 0.1);
}, 11);

const container1 = document.querySelector(".wheel__container");
const container = document.querySelector(".wheel__container.turn");

let number1 = 4000;
let number = 45;

 



const texts = document.querySelectorAll(".wheel__text");



const wheel = document.querySelector(".wheel__container.turn");

setTimeout(()=>{
    document.querySelector('.wheel__box:nth-child(2)').style.opacity = '0'
    document.querySelector('.wheel__box:nth-child(1)').style.opacity = '1'
    document.querySelector('.wheel__box:nth-child(1)').style.zIndex = '5';
    container1.style.transform = "rotate(" + number1 + "deg)";
    setTimeout(() => {
        for (let i = 0; i < texts.length; i++) {
          texts[i].classList.add("active");
        }
        texts[0].classList.remove("active");
      }, 8500);
}, 10000)
