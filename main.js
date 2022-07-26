let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-button");
let taskList = [];

addBtn.addEventListener("click", addTask);

function addTask() {
  let taskContent = taskInput.value;
  taskList.push(taskContent);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `<div class="task">
    <div>${taskList[i]}</div>
            <div>
              <button>check</button>
              <button>delete</button>
            </div>
          </div>
    </div>`;
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}
