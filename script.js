const btn1_1 = document.getElementById("button1.1");
const btn1_2 = document.getElementById("button1.2");
const btn1_3 = document.getElementById("button1.3");

const btn2_1 = document.getElementById("button2.1");
const btn2_2 = document.getElementById("button2.2");
const btn2_3 = document.getElementById("button2.3");

const btn3_1 = document.getElementById("button3.1");
const btn3_2 = document.getElementById("button3.2");
const btn3_3 = document.getElementById("button3.3");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

const btnCLR = document.getElementById("btn-clear");

btnCLR.addEventListener("click", function () {
  img1.src = "img1/pumpkin1.webp";
  img2.src = "img2/okna1.jpg";
  img3.src = "img3/kwadrat1.png";
});
//
// Dynie
//
btn1_1.addEventListener("click", function () {
  img1.src = "img1/pumpkin2.webp";
});

btn1_2.addEventListener("click", function () {
  img1.src = "img1/pumpkin3.jpg";
});

btn1_3.addEventListener("click", function () {
  img1.src = "img1/pumpkin4.jpg";
});
//
// Okna
//
btn2_1.addEventListener("click", function () {
  img2.src = "img2/okna2.jpg";
});

btn2_2.addEventListener("click", function () {
  img2.src = "img2/okna3.png";
});

btn2_3.addEventListener("click", function () {
  img2.src = "img2/okna4.jpg";
});
//
// Kwadraty
//
btn3_1.addEventListener("click", function () {
  img3.src = "img3/kwadrat2.png";
});

btn3_2.addEventListener("click", function () {
  img3.src = "img3/kwadrat3.png";
});

btn3_3.addEventListener("click", function () {
  img3.src = "img3/kwadrat4.png";
});
