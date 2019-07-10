'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function() {
  this.elements =  `
    <section class="landing-page">
      <header>
        <h1> The (almost) best Game of Thrones Houses web page you've ever seen! </h1>
        <h2> Here you can find all the information about Game of Thrones Houses </h2>
      </header>
    </section>
  `;
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}