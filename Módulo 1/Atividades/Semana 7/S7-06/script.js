let tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Limpar o quarto",
    tipo: "Urgente",
  },
  {
    titulo: "Assistir série",
    tipo: "Normal",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Guardar dinheiro do lanche",
    tipo: "Urgente",
  },
  {
    titulo: "Beber água",
    tipo: "Prioritário",
  },
];

function addTasks(task) {
  let menu = document.getElementById("chore-list");
  task = orderedTaskPriority();

  for (let index = 0; index < task.length; index++) {
    let li = document.createElement("li");
    let circleIcon = document.createElement("i");
    let trashIcon = document.createElement("i");

    li.classList.add("chore-list__item");
    circleIcon.classList.add("fa-solid", "fa-circle");
    trashIcon.classList.add("fa-solid", "fa-trash");

    li.innerText = task[index].titulo;

    menu.appendChild(li).append(circleIcon, trashIcon);

    setPriorityColor(task, index, circleIcon);
  }
}
addTasks(tasks);

function setPriorityColor(task, index, icon) {
  switch (task[index].tipo) {
    case "Urgente":
      return (icon.style.color = "#E27815");
    case "Prioritário":
      return (icon.style.color = "#DBE215");
    default:
      return (icon.style.color = "#15E226");
  }
}

function orderedTaskPriority() {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].tipo === "Urgente") {
      arr1.unshift(tasks[i]);
    } else if (tasks[i].tipo == "Prioritário") {
      arr1.push(tasks[i]);
    } else {
      arr2.push(tasks[i]);
    }
  }
  return arr1.concat(arr2);
}
