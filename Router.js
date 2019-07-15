'use strict';  

class Router {
  constructor() {
    this.page = null;
  }
  buildDom(url, parentElement) {
    switch (url) {
      case '/':
        this.generateLandingPage(parentElement);
        break;
      case '/Houses':
        this.generateHousesPage(parentElement);
        break;
      default:
        this.generateLandingPage(parentElement);
    }
  }
  generateLandingPage(parentElement) {
    this.page = new LandingPage(parentElement);
    this.page.generate();
  }
  generateHousesPage(parentElement) {
    this.page = new HousesPage(parentElement);
    this.page.generate();
  }
}

const routerInstance = new Router();
