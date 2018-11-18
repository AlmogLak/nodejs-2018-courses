"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
const chai_1 = require("chai");
describe('calucaltor tests', () => {
    let calculator;
    beforeEach(() => {
        calculator = new calculator_1.Calculator();
    });
    it('should add 2+2 with the result of 4', () => {
        chai_1.expect(calculator.add(2, 2)).to.be.equal(4);
    });
    it('should divide 2/2 with the result of 1', () => {
        chai_1.expect(calculator.divide(2, 2)).to.be.eq(1);
    });
    // it('should throw an error when dividing 2 by 0', ()=>{
    //     expect(calculator.divide.bind(calculator, 2, 0)).to.throw();
    // });
});
//# sourceMappingURL=calculator.spec.js.map