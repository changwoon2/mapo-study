let king = [
  "햄버거",
  "맥도날드",
  "버거킹",
  "음료수",
  "색연필",
  "사이다",
  "코카콜라",
];

for (let i = 0; i < king.length; i++) {
  if (king[i] === "맥도날드" || king[i] === "버거킹") {
    console.log(king[i] + ": 5000");
  } else if (king[i] === "음료수") {
    console.log(king[i] + ": 9000");
  } else {
    console.log(king[i] + ": 15000");
  }
}

king.forEach((king, i, arr) => {
  console.log(i, king, arr);
});
