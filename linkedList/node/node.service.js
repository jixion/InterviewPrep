(function () {
    'use strict';
    function Node () {
        var node = this;
        node.data = {};
        node.next = function () {};

        node.setData = function (data) {
            node.data = data;
        };

        node.getData = function () {
            return node.data;
        };

        node.setNext = function (nodePointer) {
            node.next = nodePointer;
        };

        node.getNext = function () {
            return node.next;
        };
    }

    angular.module('node')
        .service('Node', Node);
})();