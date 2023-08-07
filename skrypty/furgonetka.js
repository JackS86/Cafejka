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

    Aplikacja.Furgonetka = Furgonetka;
    window.Aplikacja = Aplikacja;
}) (window);