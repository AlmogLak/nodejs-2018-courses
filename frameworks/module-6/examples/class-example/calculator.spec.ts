import { should } from 'chai';
import { Calculator } from './calculator';
should();


describe('calulator tests', () => {
    it('should add 2 and 2 and return 4', () => {
        // given
        const calc = new Calculator();

        // when
        const result = calc.add(2, 2);
        //then
        result.should.be.equal(4);
    });

    it('should add 0 and 5 with the result of 5', ()=>{
        // given
        const calc = new Calculator();

        // when
        const result = calc.add(0, 5);
        //then
        result.should.be.equal(5);
    })
});