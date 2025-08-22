import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Importar componentes
import { SearchInput } from './components/SearchInput';
import { WeatherDisplay } from './components/WeatherDisplay';
import { ErrorMessage } from './components/ErrorMessage';
import { LoadingIndicator } from './components/LoadingIndicator';
import { CitySuggestions } from './components/CitySuggestions';

// Importar servicios
import { WeatherService } from './services/WeatherService';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Maneja la búsqueda del clima
   */
  const handleSearch = async (cityName) => {
    try {
      setIsLoading(true);
      setError(null);
      setWeatherData(null);

      console.log(`Buscando clima para: ${cityName}`);

      const data = await WeatherService.getWeatherByCity(cityName);

      console.log('Datos del clima obtenidos:', data);
      setWeatherData(data);
    } catch (error) {
      console.error('Error al buscar clima:', error);
      setError(error.message);
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Limpia el error y permite reintentar
   */
  const handleRetry = () => {
    setError(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <LinearGradient
        colors={['#4A90E2', '#357ABD', '#1e3c72']}
        style={styles.gradient}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>🌤️ Clima App</Text>
              <Text style={styles.subtitle}>
                Descubre el clima en cualquier ciudad del mundo
              </Text>
            </View>

            {/* Search Input */}
            <SearchInput onSearch={handleSearch} isLoading={isLoading} />

            {/* City Suggestions */}
            {!weatherData && !isLoading && !error && (
              <CitySuggestions onCitySelect={handleSearch} />
            )}

            {/* Loading Indicator */}
            {isLoading && (
              <LoadingIndicator message="Obteniendo datos del clima..." />
            )}

            {/* Error Message */}
            {error && !isLoading && (
              <ErrorMessage message={error} onRetry={handleRetry} />
            )}

            {/* Weather Data */}
            {weatherData && !isLoading && !error && (
              <WeatherDisplay weatherData={weatherData} />
            )}

            {/* Welcome Message */}
            {!weatherData && !isLoading && !error && (
              <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>👋 ¡Bienvenido!</Text>
                <Text style={styles.welcomeSubtext}>
                  Ingresa el nombre de una ciudad para comenzar a explorar el
                  clima
                </Text>
              </View>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 22,
  },
  welcomeContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  welcomeSubtext: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    lineHeight: 22,
  },
});
