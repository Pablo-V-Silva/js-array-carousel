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

const items = [
  '../img/01.jpg',
  '../img/02.jpg',
  '../img/03.jpg',
  '../img/04.jpg',
  '../img/05.jpg'
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

const selected = document.querySelector('.selected')
const carousel = document.querySelector('.carousel')
const buttons = document.querySelector('.buttons')
