'use strict';

const main = () => {
  const ENTRY_POINT = '/';
  let layoutInstance = null;
  let navbarInstance = null;
  const rootElement = document.querySelector('#root');
  const links = [
    {name: 'GOT',
    url: '/'},
    {name: 'Houses',
    url: '/Houses'}
  ];

  const generateLayout = () => {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }

  const generateNavbar = () => {
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.generate();
  }

  const activateRouter = () => {
    routerInstance.buildDom(ENTRY_POINT, layoutInstance.main);
  }

  const addListenersToNavbar = () => {
    const anchors = document.querySelectorAll('nav a');
    anchors.forEach(function(anchor) {
      anchor.addEventListener('click', changePage)
    })
  }

  const changePage = (event) => {
    const url = event.target.attributes.url.value;
    routerInstance.buildDom(url, layoutInstance.main);
  }

  generateLayout();
  generateNavbar();
  addListenersToNavbar();
  activateRouter();

};

window.addEventListener('load', main)