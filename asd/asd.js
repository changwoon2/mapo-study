let img_Arr = ["bg_1", "bg_2", "bg_3", "bg_4"];

// let pass = "img/";
// let foornat = ".jpg";

// let img_main = document.getElementById("img_main");

// let idx = Math.floor(Math.random() * img_Arr.length);
// img_main.src = pass + img_Arr[idx] + foornat;

function randomimg() {
  let pass = "img/";
  let foornat = ".jpg";

  let img_main = document.getElementById("img_main");

  let idx = Math.floor(Math.random() * img_Arr.length);
  img_main.src = pass + img_Arr[idx] + foornat;
}

window.onload = () => {
  randomimg();
};

setInterval(randomimg, 2000);
