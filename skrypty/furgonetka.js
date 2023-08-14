(function (window) {
    'use strict';
    var Aplikacja = window.Aplikacja || {};

    function Furgonetka(id, bazadanych) {
    this.id = id;
    this.bazadanych = bazadanych;
    }

Furgonetka.prototype.złóżZamówienie = function(zamówienie) {
    console.log('złożenie zamówienie dla ' + zamówienie.email);
    this.bazadanych.dodaj(zamówienie.email, zamówienie);
};
Furgonetka.prototype.zrealizujZamówienie = function(idKlienta){
console.log('zamówienie zrealizowane dla' +  idKlienta);
this.bazadanych.usuń(idKlienta);
}

Furgonetka.prototype.drukujZamówienia = function() {
    var tablicaKlientów = Object.keys(this.bazadanych.pobierzWszystko());
    console.log('Furgonetka nr ' + this.id + 'ma niezrealizowane zamówienia:');
    tablicaKlientów.forEach(function(id) {
        console.log(this.bazadanych.pobierz(id));

    }.bind(this));
};

    Aplikacja.Furgonetka = Furgonetka;
    window.Aplikacja = Aplikacja;
}) (window);