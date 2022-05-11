// 1. (배열).length    : 배열 갯수를 반환

// 2. (배열).push(새요소)    : 배열에 새 요소 추가

// 3. (문자열).indexOf("찾을 문자")     : "찾을 문자"가 존재한다면 그 위치값을 숫자로 반환

// 4. (문자열).split("분할 기호")     : 문자열을 분할 기호로 나누고, 그 나눈 값을 배열로 반환

// 5. (문자열).substring(시작위치, 끝위치)    : 문자열을 자름

// 6. (문자열).replace("찾을문자열", "교체할 문자열")   : 문자열에서 "찾을문자열"을 찾아, 해당 문자열을 "교체할 문자열"로 바꿈

// 7. Math.floor  : 내림 처리

// 8. Math.ceil : 올림 처리

// 9. setTimeout, setInterval  : 주기적 작업 또는 몇 초 후에 특정 작업 실행 시

// 10. document.write   : HTML로 문자열 출력

// 11. document.getElementById   : HTML 요소 찾기

// 12. document.querySelector : HTML 요소를 선택자를 사용하여 선택

// 13. addEventListener : 이벤트 추가하기

// 14. alert : 경고창 출력하기

// 자바스크립트에서는 큰따옴표나 작은따옴표가 붙지 않은 숫자는 숫자로 인식한다.

// 객체
// 1. javascript 에서는 8가지 자료형이 있고, 그 중 7개는 원시형(primitive type), 나머지는 객체형(objective type) 이다.
// 2. 객체는 new Object() 으로 생성자를 통해서 만들거나, {}으로 리터럴 문법을 이용해 만들 수 있다.
// 3. 객체는 key : value 쌍이며, 모든 자료형이 올 수 있다.(객체포함)
// 4. 공백이 있는 단어를 key로 사용할 경우, key를 ""로 묶어줘야함. * ex) "hi there"
// 5. 프로퍼티 끝은 쉼포로 끝날 수 있음. (추가, 삭제, 이동이 쉬워짐)
// 6. 상수 객체는 수정될 수 있다.
// - const로 객체가 선언되더라도, 객체변수는 메모리값을 가지고 참조하고 있기 때문에 수정될 수 있다.
// 7. 프로퍼티 접근은 점 표기(object.key) 나 대괄호 표기(object[key]) 로 할 수 있는데, 대괄호 표기만 변수를 이용한 런타임환경의 유동적인 접근 이 가능하다.
// 8. [계산된 프로퍼티, computed property]이와 유사하게, 프로퍼티 선언시 대괄호 표기를 이용하여 동적으로 프로퍼티를 할당할 수 있다.
// 9. [단축 프로퍼티, property value shorthand] 프로퍼티의 이름과 변수명이 동일하면 축약해서 쓸 수 있다.
// 10. 프로퍼티의 이름엔 for, let, return 과 같은 예약어를 사용할 수 있다. 단, __proto__는 사용 할 수 없다. (해도 안먹힘)
// 11. 숫자를 키로 넣으면 자동으로 문자열로 바뀐다.
// 12. 존재하지 않는 프로프티에 접근하면 "undefinded"를 반환한다. (확실하게 확인하고 싶으면 "key" in object 써도 좋음)
// 13. 프로퍼티는 특별한 방식으로 정렬된다.
// - 정수 프로퍼티(interger property)는 자동으로 오름차순으로 정렬되고
// - 그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬된다.
// * '정수 프로퍼티’라는 용어는 변형 없이 정수에서 왔다 갔다 할 수 있는 문자열을 의미

// let drink1 = "아메리카노";
// let drink2 = "카페라떼";
// let drink3 = "사과주스";

// let price1 = 3000;
// let price2 = 5000;
// let price3 = 13000;

//  alert(NaN === NaN);             false

// function order(drink, ice) {
//   console.log(`손님, ${drink} 은(는) ${ice} 원입니다!`);
// }

// let drink = ["아메리카노", "카페라떼", "사과주스"];
// let price = [3000, 5000, 13000];

// for (let i = 0; i < drink.length; i++) {
//   order(drink[i], price[i]);
// }

// drink.forEach((drink, i, price) => {
//   console.log(i, drink, price);
// });

// let drink = ["민트초코", "바닐라라떼", "아메리카노", "녹차라떼"];
// let time = [5000, 4500, 2000];

// console.log(`손님, ${drink} 은(는) ${time} 원입니다!`);

// function index(num1, num2) {
//   return num1 + num2;
// }

// let you = index(4500, 2000);

// console.log(you);

// let coffemenu = [
//   {
//     menu: "민트초코",
//     price: "5000",
//   },
//   { menu: "바닐라라떼", price: "4500" },

//   { menu: "아메리카노", price: "2000" },
// ];

// console.log(coffemenu[0].menu);

// let dog = {
//   name: "설",
//   age: "9",
//   find: "요크셔테리어",
//   color: "실버",
//   skill: "구르기",
//   active() {
//     console.log("빵야");
//   },
//   dar(name) {
//     console.log(name);
//   },
// };
// dog.active();
// dog.dar("죽은척");

// console.log(Object.keys(dog)[0]);
// console.log(Object.keys(dog));

// let me = {
//   key: "175",
//   name: "changwoon",
//   studdy: ["html", "css", "javascript"],
//   do: "서울강북구",
// };

// console.log(me.studdy[1]);

let text = document.getElementById("text");
let time = document.getElementById("time");
let input = document.getElementById("input");
let button = document.getElementById("button");

function box() {
  let num = input.value;
  if (num == "") {
    text.textContent = `주문할메뉴번호를입력해주세요`;
    time.textContent = "";
    return;
  }
  if (num >= 0 && num < 3) {
    text.textContent = `${coffemenu[num].menu} 는 얼마인가요?`;
    time.textContent = "";
    setTimeout(() => {
      time.textContent = `${coffemenu[num].menu} 는 ${coffemenu[num].price}원 입니다`;
    }, 2000);
  } else {
    alert("없는메뉴입니다");
  }
}

let coffemenu = [
  {
    menu: "민트초코",
    price: "5000",
  },
  { menu: "바닐라라떼", price: "4500" },

  { menu: "아메리카노", price: "2000" },
];

function times() {
  text.textContent = `${coffemenu[1].menu} 는 얼마인가요?`;
  time.textContent = `${coffemenu[1].menu} 는 ${coffemenu[1].price}원 입니다`;
}
times();
console.log(coffemenu[0].menu);
