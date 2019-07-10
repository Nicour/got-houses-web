'use strict';

function HousesPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.houses = null;
  this.loading = null;
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
  this.houses.forEach((house) => {
    var houseCard = new Card(house);
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