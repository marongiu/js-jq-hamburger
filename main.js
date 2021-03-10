// Creo una variabile con l'elemento che mi interessa prendere

// Seleziono l'icona hamburger
var menu = $('.header-right a i');

// Con la funzione di JQuery.click seleziono il menu e creando una variabile
// hamburger che punta al div hamburger-menu
menu.click(function() {
  var hamburger = $('.hamburger-menu');
  // gli assegno .show in modo tale che si
   // trasformi in display.block
  hamburger.show();
});

// Seleziono la x per chiudere il menu
var close = $('a.close');

// Faccio la stessa cosa di sopra ma
close.click(function() {
  var hamburger = $('.hamburger-menu');
// con la funzione .hide per nascondere il menu
  hamburger.hide();
})
