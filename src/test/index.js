"use strict";
exports.__esModule = true;
var typed_inject_1 = require("typed-inject");
var logger = {
    info: function (message) {
        console.log(message);
    }
};
var HttpClient = /** @class */ (function () {
    function HttpClient(log) {
        this.log = log;
    }
    HttpClient.inject = ['logger'];
    return HttpClient;
}());
var MyService = /** @class */ (function () {
    function MyService(http, log) {
        this.http = http;
        this.log = log;
    }
    MyService.inject = ['httpClient', 'logger'];
    return MyService;
}());
var appInjector = (0, typed_inject_1.createInjector)().provideValue('logger', logger).provideClass('httpClient', HttpClient);
var myService = appInjector.injectClass(MyService);
// Dependencies for MyService validated and injected
