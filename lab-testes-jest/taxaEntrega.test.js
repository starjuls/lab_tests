const { calcularTaxaEntrega, DistanciaInvalidaException } = require('./taxaEntrega');

describe('Testes para calcularTaxaEntrega', () => {
  
  test('CT01: Distância menor que 1 deve lançar erro', () => {
    expect(() => calcularTaxaEntrega(0)).toThrow(DistanciaInvalidaException);
  });

  test('CT02: Distância no limite inferior (1km) deve custar 5.00', () => {
    expect(calcularTaxaEntrega(1)).toBe(5.00);
  });

  test('CT03: Distância no limite superior da faixa 1 (10km) deve custar 5.00', () => {
    expect(calcularTaxaEntrega(10)).toBe(5.00);
  });

  test('CT04: Distância no limite inferior da faixa 2 (11km) deve custar 15.00', () => {
    expect(calcularTaxaEntrega(11)).toBe(15.00);
  });

  test('CT05: Distância no meio da faixa 2 (30km) deve custar 15.00', () => {
    expect(calcularTaxaEntrega(30)).toBe(15.00);
  });

  test('CT06: Distância no limite superior da faixa 2 (50km) deve custar 15.00', () => {
    expect(calcularTaxaEntrega(50)).toBe(15.00);
  });

  test('CT07: Distância no limite inferior da faixa 3 (51km) deve custar 30.00', () => {
    expect(calcularTaxaEntrega(51)).toBe(30.00);
  });

  test('CT08: Distância no limite superior da faixa 3 (100km) deve custar 30.00', () => {
    expect(calcularTaxaEntrega(100)).toBe(30.00);
  });

  test('CT09: Distância maior que 100 deve lançar erro', () => {
    expect(() => calcularTaxaEntrega(101)).toThrow(DistanciaInvalidaException);
  });

});