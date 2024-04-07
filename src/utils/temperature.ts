
// Kelvin to Celsius
function kelvinToCelsius(kelvin: number): number {
  const celsius = kelvin - 273.15;
  return Math.round(celsius);
}

export {
  kelvinToCelsius
}