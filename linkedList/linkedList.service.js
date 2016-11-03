(function () {
    linkedList.$inject = ['node'];
    function linkedList(node) {
        var linkedList = this;

        linkedList.push = function (data) {
            node.setData(data);
        }
    }

    angular.module('linkedList')
        .service('linkedList', linkedList);
})();