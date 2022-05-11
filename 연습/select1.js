// let Booting;

// console.log(Booting);

// let Booting1;

// console.log(Booting1);

// let Booting2;

// console.log(null);

// let Booting3;

// console.log(0);

// let Booting4;

// console.log(undefined);

// let Booting5;

// console.log(-1);
let coffemenu = [
  {
    menu: "민트초코",
    price: "5000",
  },
  { menu: "바닐라라떼", price: "4500" },

  { menu: "아메리카노", price: "2000" },
];

let your = document.getElementById("your");
let result = document.getElementById("result");

function bgc() {
  let num = your.value;
  result.textContent = `${coffemenu[num].menu} 는 ${coffemenu[num].price}원 입니다`;
  console.log(num);
}
