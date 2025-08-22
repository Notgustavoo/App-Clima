# 🌤️ AppClima - Visor de Clima por Ciudad

Una aplicación móvil híbrida desarrollada con **React Native** y **Expo** que permite consultar el clima de cualquier ciudad del mundo utilizando la API de OpenWeatherMap.

## 📱 Características

- ✅ **Consumo de API externa** (OpenWeatherMap)
- ✅ **Peticiones HTTP** con manejo de respuestas JSON
- ✅ **Interfaz de usuario moderna** y responsive
- ✅ **Búsqueda por ciudad** con validación de entrada
- ✅ **Manejo completo de errores**
- ✅ **Información detallada del clima**
- ✅ **Diseño atractivo** con gradientes y animaciones

## 🚀 Tecnologías Utilizadas

- **React Native** - Framework para desarrollo móvil
- **Expo** - Plataforma para desarrollo React Native
- **OpenWeatherMap API** - Servicio de datos meteorológicos
- **JavaScript ES6+** - Lenguaje de programación
- **Expo Linear Gradient** - Para efectos visuales

## 📦 Estructura del Proyecto

```
AppClima/
├── components/          # Componentes reutilizables
├── services/           # Servicios para API calls
├── utils/             # Configuración y utilidades
├── App.js            # Componente principal
├── package.json      # Dependencias del proyecto
└── README.md        # Este archivo
```

## 🔧 Instalación y Configuración

### Prerrequisitos
- **Node.js** (versión 14 o superior)
- **npm** o **yarn**
- **Expo Go** app en tu dispositivo móvil

### Pasos de instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/TU_USUARIO/AppClima.git
   cd AppClima
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar API Key**:
   - Ve a [OpenWeatherMap](https://openweathermap.org/api)
   - Regístrate para obtener una API key gratuita
   - Abre el archivo `utils/config.js`
   - Reemplaza la API_KEY con tu clave real

## 🏃‍♂️ Ejecutar la Aplicación

### Para móvil con Expo Go:
```bash
npx expo login    # Una sola vez
npm start         # Escanea QR con Expo Go
```

### Para navegador web:
```bash
npm run web
```

## 📖 Uso de la Aplicación

1. Escribir el nombre de una ciudad
2. Presionar "Buscar" o Enter
3. Ver los resultados del clima en tiempo real
4. Usar las ciudades sugeridas para pruebas rápidas

## 🧪 Casos de Prueba

- ✅ **Ciudades válidas**: Madrid, Nueva York, Tokio
- ❌ **Ciudad inexistente**: CiudadInventada123
- ❌ **Campo vacío**: Error de validación

## 🔑 API Key

La aplicación utiliza la API de OpenWeatherMap. La API key está configurada en `utils/config.js`. Para uso en producción, reemplaza con tu propia API key.

---

**Aplicación desarrollada como proyecto académico - React Native + Expo + OpenWeatherMap API**