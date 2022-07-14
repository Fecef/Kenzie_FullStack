const users = [
  {
    name: "Madalena",
    profile: "Admin",
    sector: "Administration",
  },
  {
    name: "Rafael",
    profile: "user",
    sector: "Finance",
  },
  {
    name: "Baltazar",
    profile: "user",
    sector: "Reception",
  },
  {
    name: "Carmen",
    profile: "Admin",
    sector: "Business",
  },
];

const main = document.querySelector(".main");

function createCardList() {
  for (let i = 0; i < users.length; i++) {
    main.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card ${addColor(i)}">
            <span>${users[i].name}</span>
            <span>${users[i].profile}</span>
            <span>${users[i].sector}</span>
        </div>
        `
    );
  }
}
createCardList();

function addColor(index) {
  if (users[index].profile === "user") {
    return "user";
  } else if (
    users[index].profile === "Admin" &&
    users[index].sector === "Administration"
  ) {
    return "adminAdmin";
  }
  return "admin";
}
