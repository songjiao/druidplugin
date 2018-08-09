"use strict";
///<reference path="../../headers/common.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var QueryCtrl = /** @class */ (function () {
    function QueryCtrl($scope, $injector) {
        this.$scope = $scope;
        this.$injector = $injector;
        this.panel = this.panelCtrl.panel;
    }
    QueryCtrl.prototype.refresh = function () {
        this.panelCtrl.refresh();
    };
    return QueryCtrl;
}());
exports.QueryCtrl = QueryCtrl;
