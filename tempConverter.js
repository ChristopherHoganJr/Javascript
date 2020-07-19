const kelvin = 300; // Perfect day weather
var celsius = kelvin - 273; // Celsius is always 273 below Kelvin
var fahrenheit = celsius * (9/5) + 32; // Celsius to Fahrenheit conversion
var newton = celsius * (33/100); // Celsius to Newton scale conversion
fahrenheit = Math.floor(fahrenheit); // Rounding Fahrenheit to nearest whole number
newton = Math.floor(newton); // Rounding Newton to the nearest whole number
console.log(`${kelvin} degrees Kelvin is ${fahrenheit} degrees Fahrenheit, ${celsius} degrees Celcius, and ${newton} degrees Newton.`);
