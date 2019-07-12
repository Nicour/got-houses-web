'use strict';

function Card(house, img, href) {
  this.img = img
  this.house = house;
  this.href = href;
}

Card.prototype.generate = function() {
  return `
  <article class="cards">
    <a href="${this.href}"><img class="images" src="${this.img}" /></a>
    <h3>${this.house.name}</h3>
  </article>
`;
}
