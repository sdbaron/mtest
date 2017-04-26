import canRepresent from '../array-of-int';

describe('Test app container', ()=> {
    let arr = [1, 7, 9];

    beforeAll(()=> {

    });

    it(`10 can be decomposed by ${arr.join(',')}`, ()=> {
        let r = canRepresent(10, arr);
        expect(r).not.toBe(null)
    });

    it(`5 can not be decomposed by ${arr.join(',')}`, ()=> {
        let r = canRepresent(5, arr);
        expect(r).toBe(null)
    });

});






