console.log("test");

(function (window){
    'use strict';
    var Aplikacja = window.Aplikacja || {};

    function BazaDanych() {
        
        this.dane = {};
    }
    BazaDanych.prototype.dodaj = function(key, value) {
        this.dane[key] = value;
 };
BazaDanych.prototype.pobierz = function(key) {
    return this.dane[key];
}
BazaDanych.prototype.pobierzWszystko = function() {
    return this.dane;
};
BazaDanych.prototype.usuń = function(key){
    delete this.dane[key]
};

 Aplikacja.BazaDanych = BazaDanych;
 window.Aplikacja = Aplikacja;
})(window);

