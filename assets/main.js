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

/* DICHIARAZIONE DELLE COSTANTI CHE MI SERVIRANNO PER PROGRAMMARE GLI EVENTI DEL CAROSELLO */
const selected = document.querySelector('.selected');
const carousel = document.querySelector('.carousel');
const upBtn = document.querySelector('.upBtn');
const downBtn = document.querySelector('.downBtn');


//dichiarazione degli elementi dentro ad items + stampa a schermo nel carousel
for (let i = 0; i < items.length; i++) {
  const imgBlock = `
  <img class="img" src="${items[i]}">`;
  carousel.innerHTML += imgBlock;
}


/* ordine frecce invertito per ordine di sequenza delle immagini da 0 a 5 */
let counter = 0;

downBtn.addEventListener('click', function () {
  ++counter;
  if (counter > items.length - 1) {
    counter = 0;
  }
  const jumbo = `<img src="${items[counter]}">`;
  selected.innerHTML = jumbo;
})

upBtn.addEventListener('click', function () {
  if (counter == 0) {
    counter = items.length;
  }
  --counter;
  const jumbo = `<img src="${items[counter]}">`;
  selected.innerHTML = jumbo;
})
