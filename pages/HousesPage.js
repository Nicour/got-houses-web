'use strict';

class HousesPage {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.houses = null;
    this.loading = null;
    this.img = [
      "./style/images/Sunderly.png",
      "./style/images/Sunglass.png",
      "./style/images/Swann.png",
      "./style/images/Swyft.png",
      "./style/images/Swygert.png",
      "./style/images/Tallhart.png",
      "./style/images/Tarbeck.png",
      "./style/images/Targaryen.png",
      "./style/images/Tarly.png",
      "./style/images/Tarth.svg.png",
    ]
    this.href = [
      "https://awoiaf.westeros.org/index.php/House_Sunderly",
      "https://awoiaf.westeros.org/index.php/House_Sunglass",
      "https://awoiaf.westeros.org/index.php/House_Swann",
      "https://awoiaf.westeros.org/index.php/House_Swyft",
      "https://awoiaf.westeros.org/index.php/House_Swygert",
      "https://awoiaf.westeros.org/index.php/House_Tallhart",
      "https://awoiaf.westeros.org/index.php/House_Tarbeck",
      "https://awoiaf.westeros.org/index.php/House_Targaryen",
      "https://awoiaf.westeros.org/index.php/House_Tarly",
      "https://awoiaf.westeros.org/index.php/House_Tarth"
    ]
  }

   async generate() {
    this.generateLoading();
  
    await this.connectToAPI();
    this.elements =  `
      <header class="houses-header">
        <h2> Welcome to the GOT Houses Page </h2>
      </header>
      <section class="cards-container">
    `;
    this.houses.forEach((house,i) => {
      const houseCard = new Card(house,this.img[i], this.href[i]);
      this.elements += houseCard.generate();
    })
    this.elements += `</section>`
    this.render();
  }

  render() {
    this.parentElement.innerHTML = this.elements;
  }

  async connectToAPI() {
    this.houses = await gotServiceInstance.getAllHouses();
  }

  generateLoading() {
    this.loading = new Loading(this.parentElement);
    this.loading.generate();
  }
}

