const elForm = document.querySelector(".form");
const elInput = document.querySelector(".form input");
const msgContainer = document.querySelector(".msg__container");
const typing = document.querySelector(".online");
const clock = document.querySelector(".date");
const charge = document.querySelector(".charge");
const gamburger = document.querySelector(".gamburger");
const elMenu = document.querySelector(".menu");
const elClose = document.querySelector(".close");
const rejim = document.querySelector(".rejim");
const profil = document.querySelector(".profil");
let date = new Date();
let answer = [
  "salom",
  `qalesiz`,
  `charchamayapsizmi`,
  `futbolga boramizmi`,
  `qayerdasiz`,
  `ismiz nima`,
  `👍👍👍👍`,
  `qachon qarzingni berasan`,
  `hazillashdim`,
  `qattasan`,
  `🤣🤣🤣🤣`,
  `😢😢😢😢😢`,
];
// biz yozamiz input

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const value = elInput.value;
  if (value === "") {
    return null;
  }
  const el = document.createElement("div");
  el.classList.add("msg", `me`);
  el.innerHTML = `<p>${value}</p>
  <span>${date.getHours().toString().padStart(2, "0")}
    :${date.getMinutes().toString().padStart(2, "0")}</span>`;
  msgContainer.appendChild(el);
  answerBot();
  typing.innerHTML = `typing...`;
  elInput.value = "";
});
// javob yozuvchi funksiya

function answerBot() {
  let time = Math.floor(Math.random() * 10000);
  console.log(time);
  setTimeout(() => {
    let index = Math.floor(Math.random() * answer.length);
    const el = document.createElement("div");
    el.classList.add("msg");
    el.innerHTML = `<p>${answer[index]}</p>
  <span>${date.getHours().toString().padStart(2, "0")}
    :${date.getMinutes().toString().padStart(2, "0")}</span>`;
    msgContainer.appendChild(el);
    typing.innerHTML = `online`;
  }, time);
}
// soat
console.log(date);
clock.innerHTML = `${date.getHours().toString().padStart(2, 0)}:${date
  .getMinutes()
  .toString()
  .padStart(2, 0)}`;
let random = Math.floor(Math.random() * 100);
charge.innerHTML = `${random}%`;
charge.setAttribute(
  "style",
  `background-image: linear-gradient(to right, #ffd829 ${random}%, #fff ${random}% 100%)`
);
console.log(elClose);
// gabburger open close
gamburger.addEventListener("click", () => {
  // gamburger open
  elMenu.classList.add("open");
});
elClose.addEventListener("click", () => {
  elMenu.classList.remove("open");
});
// tungi va kunduzgi rejim
rejim.addEventListener("click", () => {
  if (rejim.innerHTML === `kunduzgi rejim`) {
    rejim.innerHTML = `tungi rejim`;
    elMenu.setAttribute(`style`, `background: #90D0FE;, opacity: 9%;`);
    profil.setAttribute("style", ` background:  #4d90c0;`);
    rejim.style.background = `#084968`;
  } else {
    rejim.innerHTML = `kunduzgi rejim`;
    profil.removeAttribute(`style`);
    rejim.style.background = `#90D0FE`;
    elMenu.removeAttribute(`style`);
  }
});
console.log(rejim.innerHTML);
