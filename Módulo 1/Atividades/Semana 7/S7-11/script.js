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

function listTasks(list) {
  let menu = document.getElementById("chore-list");
  // Reset lista.
  menu.innerHTML = "";
  list = orderTaskPriority();

  for (let index = 0; index < list.length; index++) {
    let li = document.createElement("li");
    let circleIcon = document.createElement("i");
    let trashIcon = document.createElement("i");

    li.classList.add("chore-list__item");
    circleIcon.classList.add("fa-solid", "fa-circle");
    trashIcon.classList.add("fa-solid", "fa-trash");

    li.innerText = list[index].titulo;

    menu.appendChild(li).append(circleIcon, trashIcon);

    setPriorityColor(list, index, circleIcon);
  }
}
listTasks(tasks);

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

function orderTaskPriority() {
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

function addTasks(list) {
  let button = document.querySelector("button");
  let input = document.querySelectorAll(".chore-add__input");

  button.addEventListener("click", function (event) {
    let titulo = input[0].value;
    let tipo = input[1].value;
    let obj = createTasks(titulo, tipo);
    list.push(obj);
    listTasks(tasks);
    event.preventDefault();
  });
}
addTasks(tasks);

function createTasks(titulo, tipo) {
  let newObj = {
    titulo,
    tipo,
  };
  return newObj;
}
