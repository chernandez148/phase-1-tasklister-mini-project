document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    addToDo(e.target.newTaskDescription.value);
  });
});

function addToDo(todo) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", deleteTask);

  li.textContent = `${todo}`;
  btn.textContent = "delete";

  document.querySelector("ul").appendChild(li);
  li.appendChild(btn);
}

function deleteTask(e) {
  e.taget.parentElement.remove();
}
