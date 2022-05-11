let menus = ["구내식당", "라면", "비빔밥", "제육", "탕수육", "햄버거"];

console.log("오늘메뉴입니다");

let num1 = Math.random();

console.log(num1);

let num2 = Math.floor(Math.random());

console.log(num2);
console.log(menus[5]);

let num3 = Math.floor(Math.random() * menus.length);

console.log("RANDNUM: ", num3);

for (let i = 0; i < menus.length; i++) {
  if (num3 == i) {
    console.log(menus[i]);
  }
}

menus.forEach((menu, i) => {
  if (num3 == i) {
    console.log(i, menu);
  }
});

function printmenus() {
  let menus = ["구내식당", "라면", "비빔밥", "제육", "탕수육", "햄버거"];
  let num = Math.floor(Math.random() * menus.length);
  alert(menus[num]);
}

function color() {
  let menus = ["구내식당", "라면", "비빔밥", "제육", "탕수육", "햄버거"];
  let num = Math.floor(Math.random() * menus.length);
  let div = document.querySelector("#menus");
  div.innerHTML = `<h3>오늘의 저녁 메뉴는??? => <span  style="color: red;">${menus[num]}</span></h3>`;
}
