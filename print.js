let pets = ["고양이", "화장품", "필통", "지우개", "색연필"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
} 

pets.forEach((petsname, i, arr) => {
  console.log(i, petsname, arr);
});
