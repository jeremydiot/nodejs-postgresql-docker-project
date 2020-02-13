"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld = /** @class */ (function () {
    function HelloWorld(message) {
        if (message === void 0) { message = "Hello World"; }
        this.message = message;
    }
    HelloWorld.prototype.show = function () {
        console.log(this.message);
    };
    return HelloWorld;
}());
exports.default = HelloWorld;
