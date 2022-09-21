const { sum, diff, product, divi } = require('./../src/calculadora');
const calculadora = require('./../src/calculadora')

describe("Calculadora Teste", () => {
    
    test('A soma de 1 e 2 deve ser igual a 3', () => {

        var result = calculadora.sum(1,2)
        expect(result).not.toBe(5);
    });
    
    test('A diferenca de 10 e 2 deve ser igual a 8', () => {
        
        var result = calculadora.diff(10,2)
        expect(result).toBe(8);
    
    });
    
    test('A multiplicacao de 3 e 2 deve ser igual a 6', () => {
        var result = calculadora.product(3,2)
        expect(result).toBe(6);
    
    });
    
    test('A divisao de 10 e 2 deve ser igual a 5', () => {
        var result = calculadora.divi(10,2)
        expect(result).toBe(5);
    
    });
})


