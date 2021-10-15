/* Creare un carosello con l'immagine selezionata sulla sinistra del carosello ed il carossello a destra con tanto di bottoni per andare su e giù con le immagini, quando le immagini vengono selezionate ed appaiono a schermo, compare anche una descrizione del luogo che abbiamo selezionato

- selezione dell'immagine
    SE selezionata
      appare a sinistra
- bottone up
    SE premuto
      scorre verso l'alto
- bottone down
    SE premuto
      scorre verso il basso

STRUMENTI
- console.log
- array
- for
- .addEventListner
- if
*/

/* DICHIARAZIONE DEGLI ELEMENTI DA INSERIRE NEL CAROSELLO */

const items = [
  '../img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

/* DICHIARAZIONE DELLE COSTANTI CHE MI SERVIRANNO PER PROGRAMMARE GLI EVENTI DEL CAROSELLO */
const selected = document.querySelector('.selected')
const carousel = document.querySelector('.carousel')
const upBtn = document.querySelector('.upBtn')
const downBtn = document.querySelector('.downBtn')

let sweden = document.createElement("img")
sweden.src = "../img/01.jpg"
carousel.append(sweden)

let swiss = document.createElement("img")
swiss.src = "../img/02.jpg"
carousel.append(swiss)

let london = document.createElement("img")
london.src = "../img/03.jpg"
carousel.append(london)

let germany = document.createElement("img")
germany.src = "../img/04.jpg"
carousel.append(germany)

let paradis = document.createElement("img")
paradis.src = "../img/05.jpg"
carousel.append(paradis)
