'use strict';

class Loading {
  constructor (parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
  }
  generate() {
    this.elements = '<p class="loading">Winter is comming...</p>';
    this.render();
  }
  render() {
    this.parentElement.innerHTML = this.elements;
  }
}

