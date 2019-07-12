'use strict';

function Card(house, img) {
  this.img = img
  this.house = house;
}

Card.prototype.generate = function() {
  return `
  <article class="cards">
    <img class="images" src="${this.img}" />
    <h3>${this.house.name}</h3>
    <p>Region: ${this.house.region}</p>
  </article>
`;
}
