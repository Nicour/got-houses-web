'use strict';

function Card(house) {
  this.house = house;
}

Card.prototype.generate = function() {
  return `
  <article class="card-container">
    <h3>${this.house.name}</h3>
    <p>Region: ${this.house.region}</p>
  </article>
`;
}
