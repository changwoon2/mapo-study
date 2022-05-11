let img_Arr = ["rest", "life", "coffee", "cafe_late"];

// let pass = "img/";
// let foornat = ".jpg";

// let img_main = document.getElementById("img_main");

// let idx = Math.floor(Math.random() * img_Arr.length);
// img_main.src = pass + img_Arr[idx] + foornat;

function randomimg() {
  let pass = "shop_me_img/";
  let foornat = ".png";

  let img_main = document.getElementById("img_main");

  let idx = Math.floor(Math.random() * img_Arr.length);
  img_main.src = pass + img_Arr[idx] + foornat;
}

window.onload = () => {
  randomimg();
};

setInterval(randomimg, 2000);
