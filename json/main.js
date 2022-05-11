let title = document.getElementById("edge");

let fall = document.getElementById("fall");

let you = document.getElementById("you");

let joy = document.getElementById("joy");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => {
    title.textContent = json.title;
    fall.textContent = json.body;
    you.textContent = json.body;
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    let textresult = "";
    for (let i = 0; i < json.length; i++) {
      textresult += `    <tr>
      <td>${json[i].id}</td>
      <td>${json[i].title}</td>
      <td>${json[i].userId}</td>
    </tr>`;
    }
    joy.innerHTML = textresult;
  });
