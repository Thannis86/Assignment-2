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

const img = "./brownie.jpg";

// function createThumbnails(imgs) {}

const imgslct = document.querySelector(".imgselect");
const mainimg = document.querySelector(".background");

// https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb
// Image src selector help

document.addEventListener("DOMContentLoaded", function () {
  if (mainimg) {
    mainimg.src = imgs[0].src;
    mainimg.alt = imgs[0].alt;
  }
});

// img1.addEventListener("click", button1);

// function button1() {
//   console.log("worked");
//   mainimg.src = imgs[index + 1].src;
//   mainimg.alt = imgs[index + 1].alt;
// }
