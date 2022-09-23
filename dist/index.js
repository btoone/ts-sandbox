"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greeter = void 0;
function greeter(place) {
    return "Hello, " + place;
}
exports.greeter = greeter;
let place = "World!";
console.log(greeter(place));
