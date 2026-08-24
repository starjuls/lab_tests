class DistanciaInvalidaException extends Error {
  constructor(message) {
    super(message);
    this.name = "DistanciaInvalidaException";
  }
}

function calcularTaxaEntrega(distanciaKm) {
  if (distanciaKm < 1 || distanciaKm > 100) {
    throw new DistanciaInvalidaException("Distância deve ser entre 1 e 100 km.");
  }
  
  if (distanciaKm <= 10) {
    return 5.00;
  } else if (distanciaKm <= 50) {
    return 15.00;
  } else {
    return 30.00;
  }
}

module.exports = { calcularTaxaEntrega, DistanciaInvalidaException };