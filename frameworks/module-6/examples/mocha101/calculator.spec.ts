import { Calculator } from './calculator';
import { expect } from 'chai';
describe('calucaltor tests', () => {
    let calculator: Calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });

    it('should add 2+2 with the result of 4', () => {
        expect(calculator.add(2, 2)).to.be.equal(4);
    });

    it('should divide 2/2 with the result of 1', () => {
        expect(calculator.divide(2, 2)).to.be.eq(1);
    });

    // it('should throw an error when dividing 2 by 0', ()=>{
    //     expect(calculator.divide.bind(calculator, 2, 0)).to.throw();
    // });
});

