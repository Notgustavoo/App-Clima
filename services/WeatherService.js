import { API_CONFIG } from '../utils/config';

/**
 * Servicio para obtener datos del clima usando la API de OpenWeatherMap
 */
export class WeatherService {
  /**
   * Obtiene los datos del clima para una ciudad específica
   * @param {string} cityName - Nombre de la ciudad
   * @returns {Promise<Object>} - Datos del clima
   */
  static async getWeatherByCity(cityName) {
    try {
      // Validar que se proporcione un nombre de ciudad
      if (!cityName || cityName.trim() === '') {
        throw new Error('Por favor ingresa el nombre de una ciudad');
      }

      // Construir la URL de la API
      const url = `${API_CONFIG.BASE_URL}?q=${encodeURIComponent(
        cityName.trim()
      )}&appid=${API_CONFIG.API_KEY}&units=metric&lang=es`;

      console.log(
        'Realizando petición a:',
        url.replace(API_CONFIG.API_KEY, 'API_KEY_HIDDEN')
      );

      // Realizar la petición HTTP
      const response = await fetch(url);

      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(
            `Ciudad "${cityName}" no encontrada. Verifica el nombre e intenta nuevamente.`
          );
        } else if (response.status === 401) {
          throw new Error('API Key inválida. Verifica la configuración.');
        } else if (response.status === 429) {
          throw new Error(
            'Demasiadas peticiones. Intenta nuevamente en unos minutos.'
          );
        } else {
          throw new Error(`Error del servidor: ${response.status}`);
        }
      }

      // Convertir la respuesta a JSON
      const data = await response.json();

      // Procesar y formatear los datos
      return this.formatWeatherData(data);
    } catch (error) {
      console.error('Error en WeatherService:', error);

      // Re-lanzar errores conocidos
      if (
        error.message.includes('Ciudad') ||
        error.message.includes('API Key') ||
        error.message.includes('peticiones') ||
        error.message.includes('servidor') ||
        error.message.includes('ingresa')
      ) {
        throw error;
      }

      // Manejar errores de red
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('Error de conexión. Verifica tu conexión a internet.');
      }

      // Error genérico
      throw new Error(
        'Error inesperado al obtener los datos del clima. Intenta nuevamente.'
      );
    }
  }

  /**
   * Formatea los datos recibidos de la API
   * @param {Object} data - Datos crudos de la API
   * @returns {Object} - Datos formateados
   */
  static formatWeatherData(data) {
    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      feelsLike: Math.round(data.main.feels_like),
      pressure: data.main.pressure,
      visibility: data.visibility ? Math.round(data.visibility / 1000) : null,
      iconUrl: `${API_CONFIG.ICON_URL}${data.weather[0].icon}@2x.png`,
      timestamp: new Date().toLocaleString('es-ES'),
    };
  }
}
