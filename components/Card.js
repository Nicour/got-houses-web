'use strict';

function Card(house) {
  this.house = house;
}

Card.prototype.generate = function() {
  return `
  <article>
    <h3>${this.house.name}</h3>
    <p>${this.house.region}</p>
    <p>${this.house.words}</p>
    <p>${this.house.coatOfArms}</p>
  </article>
`;
}