"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUrl = void 0;
var parseUrl = function (url) {
    if (url) {
        return url.split('&page=')[1];
    }
    return url;
};
exports.parseUrl = parseUrl;
