import { ApiRequest } from "./api.js";
class Table {
  static async render(countries) {
    const table = document.querySelector(".ranking-table");
    const tr = document.querySelectorAll(".tbody");

    if (tr.length > 0) tr.forEach((el) => el.remove());

    countries.forEach((el) => {
      const tr = document.createElement("tr");
      const placement = document.createElement("td");
      const country = document.createElement("td");
      const gold = document.createElement("td");
      const silver = document.createElement("td");
      const bronze = document.createElement("td");
      const total = document.createElement("td");

      table.append(tr);
      tr.append(placement, country, gold, silver, bronze, total);

      tr.classList.add("tbody");
      placement.innerText = `${el.ranking}º`;
      country.innerHTML = `<img src="${el.flag_url}" alt="${el.country}"> ${el.country}`;
      gold.innerText = el.medal_gold;
      silver.innerText = el.medal_silver;
      bronze.innerText = el.medal_bronze;
      total.innerText = Countries.totalOverallMedals(el);
    });
  }

  static eventHandler() {
    const searchBar = document.querySelector("#searchForm");
    const rankBtn = document.querySelector("#ranking");
    const goldBtn = document.querySelector("#goldMedals");
    const silverBtn = document.querySelector("#silverMedals");
    const bronzeBtn = document.querySelector("#bronzeMedals");
    const icon = document.querySelectorAll(".fa-solid");

    // Search Bar
    searchBar.addEventListener("submit", async (e) => {
      e.preventDefault();
      const search = e.target.search.value;
      const filtered = Countries.ranking.filter((el) => {
        const normCountry = ToolKit.inputNormalizer(el.country);
        const normSearch = ToolKit.inputNormalizer(search);

        return normCountry.includes(normSearch);
      });

      if (search === "") return Table.render(Countries.ranking);

      return this.render(filtered);
    });

    rankBtn.addEventListener("click", () => {
      const desc = Countries.filterByLowestRank();
      const asc = Countries.filterByHighestRank();
      ToolKit.toggle(icon[0], desc, asc);
    });

    // Filter by Gold Medals
    goldBtn.addEventListener("click", () => {
      const desc = Countries.filterByLowestGold();
      const asc = Countries.filterByHighestGold();
      ToolKit.toggle(icon[1], desc, asc);
    });

    // Filter by Sold Medals
    silverBtn.addEventListener("click", () => {
      const desc = Countries.filterByLowestSilver();
      const asc = Countries.filterByHighestSilver();
      ToolKit.toggle(icon[2], desc, asc);
    });

    // Filter by Bronze Medals
    bronzeBtn.addEventListener("click", () => {
      const desc = Countries.filterByLowestBronze();
      const asc = Countries.filterByHighestBronze();
      ToolKit.toggle(icon[3], desc, asc);
    });
  }
}

class Countries {
  static ranking = [];

  static async getCountries() {
    const allContries = await ApiRequest.getCountries();
    return allContries;
  }

  static totalOverallMedals(country) {
    const gold = country.medal_gold;
    const silver = country.medal_silver;
    const bronze = country.medal_bronze;

    return gold + silver + bronze;
  }

  static async rank() {
    const allContries = await ApiRequest.getCountries();

    Countries.ranking = allContries.sort((a, b) => {
      const totalA = this.totalOverallMedals(a);
      const totalB = this.totalOverallMedals(b);

      if (totalA === totalB) {
        return a.medal_gold > b.medal_gold ? -1 : 1;
      }
      return totalB - totalA;
    });
    Countries.ranking.forEach((el, i) => (el.ranking = i + 1));
    Table.render(this.ranking);
  }

  static filterByHighestRank() {
    const result = [...this.ranking];
    return result.sort(
      (a, b) => this.totalOverallMedals(b) - this.totalOverallMedals(a)
    );
  }

  static filterByLowestRank() {
    const result = [...this.ranking];
    return result.sort((a, b) => {
      const totalA = this.totalOverallMedals(a);
      const totalB = this.totalOverallMedals(b);

      if (totalA === totalB) {
        return a.medal_gold < b.medal_gold ? -1 : 1;
      }
      return totalA - totalB;
    });
  }

  static filterByHighestGold() {
    const result = [...this.ranking];
    return result.sort((a, b) => b.medal_gold - a.medal_gold);
  }

  static filterByLowestGold() {
    const result = [...this.ranking];
    return result.sort((b, a) => b.medal_gold - a.medal_gold);
  }

  static filterByHighestSilver() {
    const result = [...this.ranking];
    return result.sort((b, a) => a.medal_silver - b.medal_silver);
  }

  static filterByLowestSilver() {
    const result = [...this.ranking];
    return result.sort((b, a) => b.medal_silver - a.medal_silver);
  }

  static filterByHighestBronze() {
    const result = [...this.ranking];
    return result.sort((b, a) => a.medal_bronze - b.medal_bronze);
  }

  static filterByLowestBronze() {
    const result = [...this.ranking];
    return result.sort((b, a) => b.medal_bronze - a.medal_bronze);
  }
}

class ToolKit {
  static inputNormalizer(input) {
    return input
      .toLowerCase()
      .trim()
      .replaceAll(" ", "")
      .replaceAll("-", "")
      .replaceAll("-", "")
      .replaceAll(/[áâãà]/g, "a")
      .replaceAll(/[éêè]/g, "e")
      .replaceAll(/[íîì]/g, "i")
      .replaceAll(/[óôõò]/g, "o")
      .replaceAll(/[úûù]/g, "u");
  }

  static toggle(el, desc, asc) {
    const className = el.attributes.class.value;
    const isAscending = className.includes("fa-angle-up");

    if (isAscending) {
      el.classList.toggle("fa-angle-up");
      el.classList.toggle("fa-angle-down");
      return Table.render(desc);
    }
    el.classList.toggle("fa-angle-down");
    el.classList.toggle("fa-angle-up");
    return Table.render(asc);
  }
}

Countries.rank();
Table.eventHandler();
