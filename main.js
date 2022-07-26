let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-button");
let taskList = [];
let filterList = [];
let mode = "all";
let tabs = document.querySelectorAll(".task-tabs div");

addBtn.addEventListener("click", addTask);

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function filter(event) {
  filterList = [];
  mode = event.target.id;
  console.log("click", event.target.id);
  if (mode == "all") {
    render();
  } else if (mode == "ing") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }
    render();
  } else if (mode == "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        filterList.push(taskList[i]);
      }
    }
    render();
  }
}

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
  let list = [];
  if (mode == "all") {
    list = taskList;
  } else if (mode == "ing" || mode == "done") {
    list = filterList;
  }
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task">
        <div class="task-done">${list[i].taskContent}</div>
                <div>
                  <button onClick="toggleComplete('${list[i].id}')">check</button>
                  <button onClick="deleteTask('${list[i].id}')">delete</button>
                </div>
              </div>
        </div>`;
    } else {
      resultHTML += `<div class="task">
        <div>${list[i].taskContent}</div>
        <div>
        <button onClick="toggleComplete('${list[i].id}')">check</button>
        <button onClick="deleteTask('${list[i].id}')">delete</button>
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
