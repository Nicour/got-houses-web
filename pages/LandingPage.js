'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function() {
  this.elements =  `
    <header>
      <h1> Super cool Game of Thrones web site </h1>
      <h2> Here you can finde the information to become the bes fan of Game of Thrones </h2>
    </header>
  `;
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}