'use strict';

angular.module('cavyrApp')
    .controller('ProductCtrl', function() {
        this.selectedProduct = null;
        this.products = {
          p1: {
            name: "product 1",
            type: "type",
            image: "images/toshiba-satellite-c875-14w_small.png"
          },
          p2: {
            name: "product 2",
            type: "type",
            image: "images/asus_small.jpeg"
          },
          p3: {
            name: "product 3",
            type: "type",
            image: "images/5328cd5e3a4bdee9.jpg"

          },
          p4: {
            name: "product 5",
            type: "type",
            image: "images/5328cd5e3a4bdee9.jpg"

          },
          p5: {
            name: "product 5",
            type: "type",
            image: "images/5328cd5e3a4bdee9.jpg"
          },
          p6: {
            name: "product 6",
            type: "type",
            image: "images/5328cd5e3a4bdee9.jpg"
          }
        };
    });
