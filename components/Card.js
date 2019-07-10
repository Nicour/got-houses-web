'use strict';

function Card(house) {
  this.house = house;
}

Card.prototype.generate = function() {
  console.log(this.house.name);
  return `
  <article class="cards-container">
    <h3>House Nnme: ${this.house.name}</h3>
    <p>House region: ${this.house.region}</p>
    <p>House words: ${this.house.words}</p>
    <p>House coat of arms: ${this.house.coatOfArms}</p>
  </article>
`;
}
