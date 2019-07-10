'use strict';

function GotService() {
  this.baseUrl = 'https://anapioficeandfire.com/api/houses/';
}

GotService.prototype.getAllHouses = async function() {
  var response =  await fetch(`${this.baseUrl}`);
  var data = await response.json();
  return data;
}

var gotServiceInstance = new GotService();
