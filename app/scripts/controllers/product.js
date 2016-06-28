'use strict';

angular.module('cavyrApp')
    .controller('ProductCtrl', function() {
        this.selectedProduct = null;
        this.products = {
          p1: {
            name: "Toshiba",
            type: "type",
            image: "images/toshiba-satellite-c875-14w_small.png"
          },
          p2: {
            name: "Asus",
            type: "type",
            image: "images/asus_small.jpeg"
          },
          p3: {
            name: "HP ColorBook",
            type: "type",
            image: "images/hp_001.jpg"

          },
          p4: {
            name: "HP",
            type: "type",
            image: "images/hp_333.jpg"

          },
          p5: {
            name: "Lenovo",
            type: "type",
            image: "images/lenovo.jpg"
          },
          p6: {
            name: "product 6",
            type: "type",
            image: "images/lg.jpg"
          },
          p7: {
            name: "Philips",
            type: "type",
            image: "images/philips.jpg"
          }
        };
    });
