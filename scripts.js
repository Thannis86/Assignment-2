const imgs = [
  {
    src: "./cookie.jpg",
    alt: "A stack of 4 chocolate chip cookies, with a broken up chocolate cookie next to them, all on top of a white cloth on a wooden table.",
  },
  {
    src: "./brownie.jpg",
    alt: "Chocolate brownies, drizzled with chocolate sauce and a mint leaf on parchment paper, on a wooden table",
  },
  {
    src: "./caramelmouse.jpg",
    alt: "A yellow mousse with orange sauce, on a grey plate with jars of fruit and candles in the background",
  },
  {
    src: "./chocolatecake.jpg",
    alt: "A chocolate and coffee cake with coffe beans on a white plate on top of a white wood table",
  },
  {
    src: "./sugarcookie.jpg",
    alt: "A stack of sugar cookies in the shape of stars wrapped in a bow. A whole star anise on top, with a branch from a pine tree and sliced of orange with cinnamon sticks on top in the background",
  },
];

const btn1 = document.querySelector("#img1");
const btn2 = document.querySelector("#img2");
const btn3 = document.querySelector("#img3");
const btn4 = document.querySelector("#img4");
const btn5 = document.querySelector("#img5");

const imgslct = document.querySelector(".imgselect");
const mainimg = document.querySelector("#background");

let imgnmbr = 0;

// https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb
// Image src selector help

document.addEventListener("DOMContentLoaded", function () {
  if (mainimg) {
    mainimg.src = imgs[0].src;
    mainimg.alt = imgs[0].alt;
    console.log(imgs[0]);
    btn1.style.opacity = "50%";
  }
});

btn1.addEventListener("click", () => {
  mainimg.src = imgs[0].src;
  mainimg.alt = imgs[0].alt;
  btn1.style.opacity = "50%";
  btn2.style.opacity = "100%";
  btn3.style.opacity = "100%";
  btn4.style.opacity = "100%";
  btn5.style.opacity = "100%";
});

btn2.addEventListener("click", () => {
  mainimg.src = imgs[1].src;
  mainimg.alt = imgs[1].alt;
  btn1.style.opacity = "100%";
  btn2.style.opacity = "50%";
  btn3.style.opacity = "100%";
  btn4.style.opacity = "100%";
  btn5.style.opacity = "100%";
});

btn3.addEventListener("click", () => {
  mainimg.src = imgs[2].src;
  mainimg.alt = imgs[2].alt;
  btn1.style.opacity = "100%";
  btn2.style.opacity = "100%";
  btn3.style.opacity = "50%";
  btn4.style.opacity = "100%";
  btn5.style.opacity = "100%";
});

btn4.addEventListener("click", () => {
  mainimg.src = imgs[3].src;
  mainimg.alt = imgs[3].alt;
  btn1.style.opacity = "100%";
  btn2.style.opacity = "100%";
  btn3.style.opacity = "100%";
  btn4.style.opacity = "50%";
  btn5.style.opacity = "100%";
});

btn5.addEventListener("click", () => {
  mainimg.src = imgs[4].src;
  mainimg.alt = imgs[4].alt;
  btn1.style.opacity = "100%";
  btn2.style.opacity = "100%";
  btn3.style.opacity = "100%";
  btn4.style.opacity = "100%";
  btn5.style.opacity = "50%";
});

const imgcont = document.querySelector(".container");

function handleArrowKeyPress(event) {
  if (event.key === "ArrowRight") {
    imgnmbr(+1);
    console.log(imgnmbr);
  } else if (event.key === "ArrowLeft") {
    imgnmbr(-1);
    console.log(imgnmbr);
  }
}

// function createThumbnails() {
//   for (let i = 0; i <= imgs.length; i++) {
//     console.log(imgs[i]);
//     const thumbImg = document.createElement("img");
//     thumbImg.width = 80;
//     thumbImg.height = 45;
//     thumbImg.src = imgs[i].src;
//     thumbImg.alt = imgs[i].alt;
//     imgslct.appendChild(thumbImg);
//   }
// }

//     // if (!Array[i]) {
//     //   continue;
// createThumbnails(imgs);

// function createLargeImagesHandler() {
//   mainimg.innerHTML = null;
//   const bigImg = document.createElement("img");
//   bigImg.height = 500;
//   bigImg.width = 500;
//   bigImg.src = imgs[2].src;
//   bigImg.alt = imgs[2].alt;
//   mainimg.append(bigImg);
// }

// const testbtn = document.querySelector("#test");

// testbtn.addEventListener("click", () => {
//   console.log("This worked");
// });

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// // Splice support

// function remove() {
//   // imgs.splice(2, 1);
//   // imgcont.textContent = "It worked";
//   console.log("The button worked");
// }
