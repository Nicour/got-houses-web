'use strict';

class GotService {
  constructor() {
    this.baseUrl = 'https://anapioficeandfire.com/api/houses?page=38&pageSize=10"/';
  } 
  async getAllHouses() {
    const response =  await fetch(`${this.baseUrl}`);
  const data = await response.json();
  return data;
  }
}

const gotServiceInstance = new GotService();
