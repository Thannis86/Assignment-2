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

let imgnmbr = 1;

// https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb
// Image src selector help

function reset() {
  btn1.style.opacity = "100%";
  btn2.style.opacity = "100%";
  btn3.style.opacity = "100%";
  btn4.style.opacity = "100%";
  btn5.style.opacity = "100%";
}

function btn01() {
  mainimg.src = imgs[0].src;
  mainimg.alt = imgs[0].alt;
  reset();
  btn1.style.opacity = "50%";
}

function btn02() {
  mainimg.src = imgs[1].src;
  mainimg.alt = imgs[1].alt;
  reset();
  btn2.style.opacity = "50%";
}

function btn03() {
  mainimg.src = imgs[2].src;
  mainimg.alt = imgs[2].alt;
  reset();
  btn3.style.opacity = "50%";
}

function btn04() {
  mainimg.src = imgs[3].src;
  mainimg.alt = imgs[3].alt;
  reset();
  btn4.style.opacity = "50%";
}

function btn05() {
  mainimg.src = imgs[4].src;
  mainimg.alt = imgs[4].alt;
  reset();
  btn5.style.opacity = "50%";
}

document.addEventListener("DOMContentLoaded", function () {
  if (mainimg) {
    mainimg.src = imgs[0].src;
    mainimg.alt = imgs[0].alt;
    console.log(imgs[0]);
    btn1.style.opacity = "50%";
  }
});

btn1.addEventListener("click", () => {
  btn01();
  imgnmbr = 1;
});

btn2.addEventListener("click", () => {
  btn02();
  imgnmbr = 2;
});

btn3.addEventListener("click", () => {
  btn03();
  imgnmbr = 3;
});

btn4.addEventListener("click", () => {
  btn04();
  imgnmbr = 4;
});

btn5.addEventListener("click", () => {
  btn05();
  imgnmbr = 5;
  console.log(imgnmbr);
});

function btn(number) {
  if (number == 1) {
    btn01();
  } else if (number == 2) {
    btn02();
  } else if (number == 3) {
    btn03();
  } else if (number == 4) {
    btn04();
  } else if (number == 5) {
    btn05();
  }
}

const left = document.querySelector("#left");
const right = document.querySelector("#right");

right.addEventListener("click", () => {
  if (imgnmbr < 5) {
    imgnmbr++;
  } else if ((imgnmbr = 5)) {
    imgnmbr = 1;
  }
  console.log(imgnmbr);
  btn(imgnmbr);
});

left.addEventListener("click", () => {
  if (imgnmbr > 1) {
    imgnmbr--;
  } else if ((imgnmbr = 1)) {
    imgnmbr = 5;
  }
  console.log(imgnmbr);
  btn(imgnmbr);
});

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
