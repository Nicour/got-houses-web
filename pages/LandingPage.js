'use strict';

class LandingPage{
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
  }
  generate() {
    this.elements =  `
    <section>
      <article class="landing-page">
        <h1 class="title"> THE -ALMOST- BEST GAME OF THRONES WEB PAGE YOU HAVE EVER SEEN </h1>
        <h3 class="subtitle"> Here you can find all the information about Game of Thrones Houses </h3>
      </article>
    </section>
  `;
  this.render();
  }
  render() {
    this.parentElement.innerHTML = this.elements;
  }
}
