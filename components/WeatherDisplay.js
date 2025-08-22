import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

/**
 * Componente para mostrar la información del clima
 */
export const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        {/* Información principal */}
        <View style={styles.mainInfo}>
          <Text style={styles.cityName}>
            {weatherData.city}, {weatherData.country}
          </Text>

          <View style={styles.temperatureContainer}>
            <Image
              source={{ uri: weatherData.iconUrl }}
              style={styles.weatherIcon}
              resizeMode="contain"
            />
            <Text style={styles.temperature}>{weatherData.temperature}°C</Text>
          </View>

          <Text style={styles.description}>
            {weatherData.description.charAt(0).toUpperCase() +
              weatherData.description.slice(1)}
          </Text>

          <Text style={styles.feelsLike}>
            Sensación térmica: {weatherData.feelsLike}°C
          </Text>
        </View>

        {/* Información adicional */}
        <View style={styles.additionalInfo}>
          <Text style={styles.sectionTitle}>Detalles del clima</Text>

          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Humedad</Text>
              <Text style={styles.detailValue}>{weatherData.humidity}%</Text>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Viento</Text>
              <Text style={styles.detailValue}>
                {weatherData.windSpeed} m/s
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Presión</Text>
              <Text style={styles.detailValue}>{weatherData.pressure} hPa</Text>
            </View>

            {weatherData.visibility && (
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Visibilidad</Text>
                <Text style={styles.detailValue}>
                  {weatherData.visibility} km
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Timestamp */}
        <View style={styles.footer}>
          <Text style={styles.timestamp}>
            Última actualización: {weatherData.timestamp}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  mainInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  weatherIcon: {
    width: 80,
    height: 80,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginLeft: 10,
  },
  description: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
    textAlign: 'center',
  },
  feelsLike: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  },
  additionalInfo: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  detailItem: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
    marginTop: 20,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
