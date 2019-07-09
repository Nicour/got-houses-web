GOT web

Description

Web en la que se mostrarán las casas de Game of Thrones con sus nombres, regiónes y frases de cabecera. Esta información será obtenida de la siguiente API: https://anapioficeandfire.com/.
La web constará de dos paginas:
-Landing page, en la que habrá una barra de navegación y el titulo de la web.
-Houses page, en la que se moestrarán las casas son su respectiva imagen e información en formato de cartas.

MVP 

Crear las dos pantallas con la información obtenida de la API, cuyo diseño la haga sencilla de navegar.

Backlog

Al seleccionar cada una de las casas mostrar una nueva página con el listado de personajes de esa casa.

Data structure

Landing Page:
-this.parentElement;
-this.elements;
-this.render;
-this.style;
-this.generate;

Houses Page:
-this.parentElement;
-this.elements;
-this.render;
-this.style;
-this.generate;
-this.houses;
-this.loading;
-this.connectToAPI;

Navbar:
-this.parentElement;
-this.style;
-this.links;
-this.elements;
-this.generate;
-this.render;

Cards:
-this.style;
-this.house;
-this.generate;
-this.render;

Loading:
-this.parentElement;
-this.elements;
-this.render;
-this.style;
-this.generate;

Layout:
-this.root;
-this.style;
-this.element;
-this.header;
-this.main;
-this.generate;
-this.render;
-this.getContainers;

Router:
-this.page;
-buildDom;
-generate Loading Page;
-generate Houses Page;

Task

Create files; Setup Github; Create Layout; Create LandingPage; Create HousesPage; Create Navbar; Set transitions between pages; Create service (fetch); Create Loading; Create Cards; Add style to navbar; Add style to Landing; Add style to Houses; Add style to cards.


Links

Trello GOT web (https://trello.com/b/AqT02Pri/web-app-got)

GitHub https://github.com/Nicour/got-web

Slides URls for the project presentation (slides) Link Slides.com