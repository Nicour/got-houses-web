'use strict';

function Card(house) {
  this.house = house;
}

Card.prototype.generate = function() {
  console.log(this.house.name);
  return `
  <article class="cards-container">
    <h3>${this.house.name}</h3>
    <p>${this.house.region}</p>
    <p>${this.house.words}</p>
    <p>${this.house.coatOfArms}</p>
  </article>
`;
}
