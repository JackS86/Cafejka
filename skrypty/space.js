(function (window) {
    'use strict';
    var Aplikacja = window.Aplikacja || {};
    var liczbaLądowań = 0;
    function StatekKosmiczny() {

    }
    StatekKosmiczny.prototype.wyłączenieSilników = function () {
        liczbaLądowań++;
        console.log('statek wylądował')
    }
    StatekKosmiczny.prototype.podajLiczbęLądowań = function () {
        console.log('Całkowita liczba lądowań:' + liczbaLądowań);
    }
    Aplikacja.StatekKosmiczny = StatekKosmiczny
    window.Aplikacja = Aplikacja;
}) (window);