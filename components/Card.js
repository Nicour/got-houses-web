'use strict';

class Card {
  constructor(house, img, href) {
    this.img = img
    this.house = house;
    this.href = href;
  }
  generate() {
    return `
  <article class="cards">
    <a href="${this.href}"><img class="images" src="${this.img}" /></a>
    <h3 class="card-name">${this.house.name}</h3>
  </article>
`;
  }
}


