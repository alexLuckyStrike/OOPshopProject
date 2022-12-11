let btn = document.getElementById("pressBtn");
let root = document.getElementById("root");
let finalPrice = [];

async function createRequest() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      return response.json();
    }
  );
}

class PersonsList {
  constructor() {}

  async fetchPosts() {
    let responseUsers = await createRequest();

    for (let i = 0; i < responseUsers.length; i++) {
      Object.keys(responseUsers[i]).forEach((item) => {
        if (
          item !== "id" &&
          item !== "name" &&
          item !== "username" &&
          item !== "email"
        ) {
          delete responseUsers[i][item];
        }
      });
    }

    const personsList = document.createElement("ul");
    personsList.className = "product-list";

    for (let i in responseUsers) {
      const person = new PersonItem(responseUsers[i]);

      const personItem = person.render();

      personsList.append(personItem);
    }

    const renderHook = document.getElementById("root");

    renderHook.append(personsList);
  }

  begin() {
    const btn = document.getElementById("pressBtn");
    btn.addEventListener("click", this.fetchPosts.bind(this));
  }
}

class PersonItem {
  constructor(person) {
    this.person = person;
  }

  identifyItem() {
    PersonBasket.addItem(this.person);
  }

  render() {
    const prodItem = document.createElement("li");
    prodItem.className = "prod-item";
    prodItem.innerHTML = `
 <h2>${this.person.id}</h2>
 <h3>${this.person.name}</h3>  
 <h4>${this.person.email}</h4>
 <h5>${this.person.username}</h5>
 <button>Купить раба</button>
 `;
    const getButton = prodItem.querySelector("button");
    getButton.addEventListener("click", this.identifyItem.bind(this));
    return prodItem;
  }
}

let result = new PersonsList().begin();

class PersonBasket {
  constructor() {}

  set totalResult(value) {
    console.log("!!");
    finalPrice = value;
    this.totalOutput.innerHTML = `<h3>Total: \$${this.totalSum}</h3>`;
  }

  get totalSum() {
    const sum = finalPrice.reduce(
      (prevValue, curValue) => prevValue + curValue,
      0
    );
    return sum;
  }

  static addItem(product) {
    console.log(product);
    console.log(this.totalOutput);
    // const updatedItems = [...finalPrice];
    // finalPrice.push(product);
    // this.totalResult = updatedItems;
  }

  render() {
    this.item = new PersonItem();
    const section = document.createElement("section");
    section.innerHTML = `
    <h3>Total:\$${0}</h3>
    <h3>Amount:</h3>
    <button>Order Now!!</button>
    `;
    section.className = "cart";
    this.totalOutput = section.querySelector("h3");

    return section;
  }
}

let basket = new PersonBasket().render();

class SlaveShop {
  constructor() {}
  static render() {
    const renderHook = document.getElementById("root");
    renderHook.append(basket);
  }
}

SlaveShop.render();
