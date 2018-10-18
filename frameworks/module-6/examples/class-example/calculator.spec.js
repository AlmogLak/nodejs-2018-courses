"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const calculator_1 = require("./calculator");
chai_1.should();
describe('calulator tests', () => {
    it('should add 2 and 2 and return 4', () => {
        // given
        const calc = new calculator_1.Calculator();
        // when
        const result = calc.add(2, 2);
        //then
        result.should.be.equal(4);
    });
    it('should add 0 and 5 with the result of 5', () => {
        // given
        const calc = new calculator_1.Calculator();
        // when
        const result = calc.add(0, 5);
        //then
        result.should.be.equal(5);
    });
});
//# sourceMappingURL=calculator.spec.js.map