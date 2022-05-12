const left = document.querySelector(".left");
const sliderIamge = document.querySelector(".slider_image");
const choose = document.querySelector(".choose");

const slides = {
  firstSlide: {
    h1: "Nike <span class='blue'>Air</span> Max",
    p: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "<img src='./assets/img/shoes1.png' class='slider_inside' />",
    ico: "<img id='0' src='./assets/img/mini3.png'  />",
  },
  secondSlide: {
    h1: "Nike <span class='grey'>Air</span> Max",
    p: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "<img src='./assets/img/shoes2.png' class='slider_inside' />",
    ico: "<img id='1' src='./assets/img/mini1.png'   />",
  },
  thirdSlide: {
    h1: "Nike <span class='orange'>Air</span> Max",
    p: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "<img src='./assets/img/shoes3.png' class='slider_inside' />",
    ico: "<img id='2' src='./assets/img/mini2.png'  />",
  },
};

console.log(slides);

let i = 0;

Object.keys(slides).forEach(function (item) {
  console.log(slides[item].ico);
  const newImg = document.createElement("div");
  newImg.className = `image_ico ${i++}`;
  newImg.innerHTML = slides[item].ico;
  choose.appendChild(newImg);
});

const h1 = document.createElement("h1");
h1.innerHTML = slides.firstSlide.h1;
left.appendChild(h1);

const p = document.createElement("p");
p.innerHTML = slides.firstSlide.p;
left.appendChild(p);

sliderIamge.innerHTML = slides.firstSlide.img;

choose.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.id === "0") {
    h1.innerHTML = slides.firstSlide.h1;
    left.appendChild(h1);

    p.innerHTML = slides.firstSlide.p;
    left.appendChild(p);

    sliderIamge.innerHTML = slides.firstSlide.img;
  } else if (e.target.id === "1") {
    h1.innerHTML = slides.secondSlide.h1;
    left.appendChild(h1);

    p.innerHTML = slides.secondSlide.p;
    left.appendChild(p);

    sliderIamge.innerHTML = slides.secondSlide.img;
  } else if (e.target.id === "2") {
    h1.innerHTML = slides.thirdSlide.h1;
    left.appendChild(h1);

    p.innerHTML = slides.thirdSlide.p;
    left.appendChild(p);

    sliderIamge.innerHTML = slides.thirdSlide.img;
  }
});
