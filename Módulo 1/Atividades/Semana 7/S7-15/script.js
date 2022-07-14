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

let sstask = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
];

function listTasks(list) {
  let menu = document.getElementById("chore-list");
  // Reset lista.
  menu.innerHTML = "";
  list = orderTaskPriority(list);

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

function orderTaskPriority(list) {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].tipo === "Urgente") {
      arr1.unshift(list[i]);
    } else if (list[i].tipo == "Prioritário") {
      arr1.push(list[i]);
    } else {
      arr2.push(list[i]);
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

    if (titulo === "" || tipo === "") {
      return;
    }

    let obj = createTasks(titulo, tipo);
    list.push(obj);
    listTasks(list);
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

function searchTask(list) {
  let search = document.querySelectorAll(".search-bar__input")[0];
  // mudar o evento
  search.addEventListener("keyup", function (event) {
    let valorInput = normalizedValue(event);
    let tasksFiltered = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i].titulo.replace(/\s/g, "").toLowerCase() === valorInput) {
        tasksFiltered.push(list[i]);
      }
    }

    return event.target.value === ""
      ? listTasks(tasks)
      : listTasks(tasksFiltered);
  });
}
searchTask(tasks);

function normalizedValue(event) {
  return event.target.value.replace(/\s/g, "").toLowerCase();
}
