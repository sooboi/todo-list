let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-button");
let taskList = [];

addBtn.addEventListener("click", addTask);

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  render();
  console.log(task);
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `<div class="task">
        <div class="task-done">${taskList[i].taskContent}</div>
                <div>
                  <button onClick="toggleComplete('${taskList[i].id}')">check</button>
                  <button onClick="deleteTask('${taskList[i].id}')">delete</button>
                </div>
              </div>
        </div>`;
    } else {
      resultHTML += `<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
        <button onClick="toggleComplete('${taskList[i].id}')">check</button>
        <button onClick="deleteTask('${taskList[i].id}')">delete</button>
        </div>
        </div>
        </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
