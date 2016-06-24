'use strict';

angular.module('cavyrApp')
    .controller('ProductCtrl', function() {
        this.selectedProduct = null;
        this.products = {
          p1: {
            name: "product 1",
            type: "type"
          },
          p2: {
            name: "product 2",
            type: "type"
          },
          p3: {
            name: "product 3",
            type: "type"
          },
          p4: {
            name: "product 5",
            type: "type"
          },
          p5: {
            name: "product 5",
            type: "type"
          },
          p6: {
            name: "product 6",
            type: "type"
          }
        };
    });
