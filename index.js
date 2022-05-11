let menus = ["치즈와퍼", "불고기와퍼", "새우버거", "치킨버거", "베이컨와퍼"];

function food() {
  let num = Math.floor(Math.random() * menus.length);
  let div = document.querySelector("#menus");
  div.innerHTML = `<h3>오늘의 추천 메뉴는 <span  style="color: red;">${menus[num]}</span>입니다.</h3>`;
}
