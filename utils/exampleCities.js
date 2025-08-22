// Ejemplos de ciudades para probar la aplicación
export const EXAMPLE_CITIES = [
  // Ciudades de México
  'Ciudad de México',
  'Guadalajara',
  'Monterrey',
  'Puebla',
  'Tijuana',
  'Cancún',

  // Ciudades de Latinoamérica
  'Buenos Aires',
  'São Paulo',
  'Lima',
  'Bogotá',
  'Santiago',
  'Caracas',

  // Ciudades del mundo
  'Madrid',
  'Barcelona',
  'Paris',
  'London',
  'New York',
  'Tokyo',
  'Berlin',
  'Rome',
  'Sydney',
  'Toronto',

  // Para probar errores
  // 'CiudadInventada123', // Esta ciudad no existe
  // '', // Campo vacío
];

// Función para obtener una ciudad aleatoria
export const getRandomCity = () => {
  const randomIndex = Math.floor(Math.random() * EXAMPLE_CITIES.length);
  return EXAMPLE_CITIES[randomIndex];
};
