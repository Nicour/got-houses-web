'use strict';  

function Router() {
  this.page = null;
}

Router.prototype.buildDom = function(url, parentElement) {
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

Router.prototype.generateLandingPage = function(parentElement) {
  this.page = new LandingPage(parentElement);
  this.page.generate();
}

Router.prototype.generateHousesPage = function(parentElement) {
  this.page = new HousesPage(parentElement);
  this.page.generate();
}

var routerInstance = new Router();