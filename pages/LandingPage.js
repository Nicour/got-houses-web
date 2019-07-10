'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function() {
  this.elements =  `
    <section>
      <article class="landing-page">
        <h1 class="title"> THE BEST GAME OF THRONES HOUSES WEB PAGE YOU HAVE EVER SEEN </h1>
        <h3 class="subtitle"> Here you can find all the information about Game of Thrones Houses </h3>
      </article>
    </section>
  `;
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}