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

const imgslct = document.querySelector(".imgselect");
const mainimg = document.querySelector(".background");

// https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb
// Image src selector help

document.addEventListener("DOMContentLoaded", function () {
  if (mainimg) {
    mainimg.src = imgs[0].src;
    mainimg.alt = imgs[0].alt;
    console.log(imgs[0]);
  }
});

const imgcont = document.querySelector("#container");

function createThumbnails() {
  for (let i = 0; i <= imgs.length; i++) {
    console.log(imgs[i]);
    const thumbImg = document.createElement("img");
    thumbImg.width = 300;
    thumbImg.height = 200;
    thumbImg.src = imgs[1].src;
    imgcont.appendChild(thumbImg);
  }
}

// const galleryContainer = document.getElementById("container");

// // Loop through the array and create gallery items
// for (let i = 0; i < imgs.length; i++) {
//   const galleryItem = document.createElement("div");
//   galleryItem.classList.add("gallery-item");

//   const imgElement = document.createElement("img");
//   imgElement.src = imgs[i].src;
//   imgElement.alt = imgs[i].src;

//   // Append the image to the gallery item
//   galleryItem.appendChild(imgElement);

//   // Append the gallery item to the container
//   galleryContainer.appendChild(galleryItem);
// }
