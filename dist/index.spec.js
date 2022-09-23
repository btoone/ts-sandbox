"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('greeter', () => {
    it('says hello', () => {
        let actual;
        actual = (0, index_1.greeter)('World!');
        expect(actual).toBe('Hello, World!');
    });
});
