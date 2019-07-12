'use strict';

function HousesPage(parentElement) {
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
}

HousesPage.prototype.generate = async function() {
  this.generateLoading();
  
  await this.connectToAPI();
  this.elements =  `
    <header class="houses-header">
      <h2> Welcome to the GOT Houses Page </h2>
    </header>
    <section class="cards-container">
  `;
  this.houses.forEach((house,i) => {
    var houseCard = new Card(house,this.img[i]);
    this.elements += houseCard.generate();
  })
  this.elements += `</section>`
  this.render();
}

HousesPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

HousesPage.prototype.connectToAPI = async function() {
  this.houses = await gotServiceInstance.getAllHouses();
}

HousesPage.prototype.generateLoading = function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
}